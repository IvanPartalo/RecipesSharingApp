using BackendApp.DTO;
using BackendApp.Model;

namespace BackendApp.Services
{
    public interface IRecipeService
    {
        public Task<List<Recipe>> GetAll();
        public void AddRecipe(string cookName, RecipeDTO recipeDTO);
        public Task<bool> RemoveRecipe(string username, int id);
    }
}
