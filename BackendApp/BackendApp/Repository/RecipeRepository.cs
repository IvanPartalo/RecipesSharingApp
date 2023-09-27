using BackendApp.DBContext;
using BackendApp.Model;
using Microsoft.EntityFrameworkCore;

namespace BackendApp.Repository
{
    public class RecipeRepository : IRecipeRepository
    {
        private readonly RecipesDBContext _context;
        public RecipeRepository(RecipesDBContext context)
        {
            _context = context;
        }
        public async Task<List<Recipe>> GetAll()
        {
            return await _context.Recipes.Include(r => r.Ingredients).Include(r => r.usersWhoBookMarked).ToListAsync();
        }
        public async Task<List<Recipe>> GetSearchedRecipes(string recipeName, string ingredientName)
        {
            List<Recipe> filteredRecipesByName = await _context.Recipes.Include(r => r.Ingredients)
                .Where(r => r.Name.ToLower().Contains(recipeName.ToLower()) || recipeName=="").ToListAsync();
            if(ingredientName == "All")
            {
                return filteredRecipesByName;
            }
            return filterByIngredient(filteredRecipesByName, ingredientName);
        }
        private List<Recipe> filterByIngredient(List<Recipe> filteredRecipes, string ingredientName)
        {
            List<Recipe> filteredRecipesByIngredient = new List<Recipe>();
            foreach (Recipe recipe in filteredRecipes)
            {
                foreach (Ingredient ingredient in recipe.Ingredients)
                {
                    if (ingredient.Name == ingredientName)
                    {
                        filteredRecipesByIngredient.Add(recipe);
                        continue;
                    }
                }
            }
            return filteredRecipesByIngredient;
        }
        public void Create(string username, Recipe recipe)
        {
            _context.Cooks.Include(c => c.Recipes).FirstOrDefault(c => c.Username == username).Recipes.Add(recipe);
            _context.Recipes.Add(recipe);
            _context.SaveChanges();
        }
        public async Task<bool> Delete(int id)
        {
            Recipe recipe = await _context.Recipes.Include(r => r.Ingredients).FirstOrDefaultAsync(r => r.Id == id);
            if(recipe == null) 
            {
                return false;
            }
            foreach(Ingredient ingredient in recipe.Ingredients)
            {
                _context.Ingredients.Remove(ingredient);
            }
            _context.Recipes.Remove(recipe);
            await _context.SaveChangesAsync();
            return true;
        }
        public async Task<List<Ingredient>> GetRecipeIngredients(int id)
        {
            Recipe recipe = await _context.Recipes.Include(r => r.Ingredients).FirstOrDefaultAsync(r => r.Id == id);
            return recipe.Ingredients;
        }
        public async Task<Recipe> GetById(int id)
        {
            return await _context.Recipes.Include(r => r.Ingredients).FirstOrDefaultAsync(r => r.Id == id);
        }
    }
}
