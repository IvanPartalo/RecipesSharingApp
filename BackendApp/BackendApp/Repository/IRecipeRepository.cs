using BackendApp.Model;

namespace BackendApp.Repository
{
    public interface IRecipeRepository
    {
        public void Create(string username, Recipe recipe);
        public Task<List<Recipe>> GetAll();
        public Task<bool> Delete(int id);
        public Task<List<Ingredient>> GetRecipeIngredients(int id);
        public Task<Recipe> GetById(int id);
    }
}
