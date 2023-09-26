using BackendApp.DTO;
using BackendApp.Model;
using BackendApp.Repository;

namespace BackendApp.Services
{
    public class RecipeService : IRecipeService
    {
        private readonly IRecipeRepository _recipeRepository;
        private readonly ICookRepository _cookRepository;
        public RecipeService(IRecipeRepository recipeRepository, ICookRepository cookRepository)
        {
            _recipeRepository = recipeRepository;
            _cookRepository = cookRepository;
        }
        public async Task<List<Recipe>> GetAll()
        {
            return await _recipeRepository.GetAll();
        }
        public void AddRecipe(string cookName, RecipeDTO recipeDTO)
        {
            Recipe recipe = new Recipe();
            recipe.PreparationDescription = recipeDTO.PreparationDescription;
            recipe.Name = recipeDTO.Name;
            foreach(var item in recipeDTO.Ingredients)
            {
                Ingredient ingredient = new Ingredient();
                ingredient.MeasurementUnit = item.MeasurementUnit;
                ingredient.Quantity = item.Quantity;
                ingredient.Name = item.Name;
                recipe.Ingredients.Add(ingredient);
            }
            _recipeRepository.Create(cookName, recipe);
        }
        public async Task<bool> RemoveRecipe(string username, int recipeId)
        {
            if(!await _cookRepository.CanCookDelete(username, recipeId))
            {
                return false;
            }
            return await _recipeRepository.Delete(recipeId);
        }
        public async Task<bool> RemoveRecipeByAdmin(int recipeId)
        {
            return await _recipeRepository.Delete(recipeId);
        }
    }
}
