using BackendApp.DBContext;
using BackendApp.Model;
using Microsoft.EntityFrameworkCore;

namespace BackendApp.Repository
{
    public class IngredientRepository : IIngredientRepository
    {
        private readonly RecipesDBContext _context;
        public IngredientRepository(RecipesDBContext context)
        {
            _context = context;
        }

        public async Task<ExistingIngredient> CreateExistingIngredient(ExistingIngredient ingredient)
        {
            _context.ExistingIngredients.Add(ingredient);
            await _context.SaveChangesAsync();
            return ingredient;
        }

        public async Task<bool> DeleteExistingIngredient(int id)
        {
            ExistingIngredient ingredient = await _context.ExistingIngredients.FindAsync(id);
            if(ingredient == null) {
                return false;
            }
            _context.ExistingIngredients.Remove(ingredient);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<List<ExistingIngredient>> GetExistingIngredients()
        {
            return await _context.ExistingIngredients.ToListAsync();
        }
    }
}
