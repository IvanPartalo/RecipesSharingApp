using BackendApp.DTO;
using BackendApp.Model;

namespace BackendApp.Services
{
    public interface IIngredientService
    {
        public Task<List<ExistingIngredient>> GetExistingIngredients();
        public Task<ExistingIngredient> CreateExistingIngredient(ExistingIngredientDTO ingredient);
        public Task<bool> DeleteExistingIngredient(int id);
    }
}
