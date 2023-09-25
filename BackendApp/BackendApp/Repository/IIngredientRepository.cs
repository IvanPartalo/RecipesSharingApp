using BackendApp.Model;

namespace BackendApp.Repository
{
    public interface IIngredientRepository
    {
        public Task<List<ExistingIngredient>> GetExistingIngredients();
        public Task<ExistingIngredient> CreateExistingIngredient(ExistingIngredient ingredient);
        public Task<bool> DeleteExistingIngredient(int id);
    }
}
