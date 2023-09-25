using BackendApp.DBContext;
using BackendApp.Model;

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
    }
}
