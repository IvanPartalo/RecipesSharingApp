using BackendApp.DTO;
using BackendApp.Model;
using BackendApp.Repository;

namespace BackendApp.Services
{
    public class IngredientService : IIngredientService
    {
        private readonly IIngredientRepository _ingredientRepository;
        public IngredientService(IIngredientRepository ingredientRepository) 
        {
            _ingredientRepository = ingredientRepository;
        }
        public async Task<ExistingIngredient> CreateExistingIngredient(ExistingIngredientDTO ingredient)
        {
            ExistingIngredient i = new ExistingIngredient();
            i.MeasurementUnit = ingredient.MeasurementUnit;
            i.Name = ingredient.Name;
            return await _ingredientRepository.CreateExistingIngredient(i);
        }

        public async Task<bool> DeleteExistingIngredient(int id)
        {
            return await _ingredientRepository.DeleteExistingIngredient(id);
        }

        public async Task<List<ExistingIngredient>> GetExistingIngredients()
        {
            return await _ingredientRepository.GetExistingIngredients();
        }
    }
}
