using BackendApp.Model;

namespace BackendApp.Repository
{
    public interface IUserRepository
    {
        public Task<User> Create(User user);
        public Task<bool> BookmarkRecipe(string username, int recipeId);
        public Task<List<Recipe>> getBookmarkedRecipes(string username);
    }
}
