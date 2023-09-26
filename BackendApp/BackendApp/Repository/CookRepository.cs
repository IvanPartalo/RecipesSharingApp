using BackendApp.DBContext;
using BackendApp.Model;
using Microsoft.EntityFrameworkCore;

namespace BackendApp.Repository
{
    public class CookRepository : ICookRepository
    {
        private readonly RecipesDBContext _context;
        public CookRepository(RecipesDBContext context)
        {
            _context = context;
        }
        public async Task<Cook> Create(Cook cook)
        {
            _context.Cooks.Add(cook);
            await _context.SaveChangesAsync();
            return cook;
        }
        public async Task<bool> CanCookDelete(string cookUsername, int recipeId)
        {
            Cook cook = await _context.Cooks.Include(c => c.Recipes).FirstOrDefaultAsync(c => c.Username == cookUsername);
            foreach(var recipe in cook.Recipes)
            {
                if(recipe.Id == recipeId)
                {
                    return true;
                }
            }
            return false;
        }
        public async Task<List<Cook>> GetAll()
        {
            return await _context.Cooks.Include(c => c.Recipes).ToListAsync();
        }
        public async Task<Cook> GetByUsername(string username)
        {
            return await _context.Cooks.Include(c => c.Recipes).FirstOrDefaultAsync(c => c.Username == username);
        }
    }
}
