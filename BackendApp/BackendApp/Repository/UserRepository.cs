using BackendApp.DBContext;
using BackendApp.Model;
using Microsoft.EntityFrameworkCore;

namespace BackendApp.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly RecipesDBContext _context;
        public UserRepository(RecipesDBContext context)
        {
            _context = context;
        }
        public async Task<User> Create(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }
        public async Task<bool> BookmarkRecipe(string username, int recipeId)
        {
            User user = await _context.Users.Include(u => u.RecipesBookmark).FirstOrDefaultAsync(u => u.Username == username);
            Recipe recipe = await _context.Recipes.Include(r => r.usersWhoBookMarked).FirstOrDefaultAsync(r => r.Id == recipeId);
            if (recipe == null) 
            {
                return false;
            }
            user.RecipesBookmark.Add(recipe);
            recipe.usersWhoBookMarked.Add(user);
            await _context.SaveChangesAsync();
            return true;
        }
        public async Task<List<Recipe>> getBookmarkedRecipes(string username)
        {
            User user = await _context.Users.Include(u => u.RecipesBookmark).FirstOrDefaultAsync(u => u.Username == username);
            return user.RecipesBookmark;
        }
    }
}
