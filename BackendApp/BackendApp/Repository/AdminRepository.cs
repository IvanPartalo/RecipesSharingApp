using BackendApp.DBContext;
using BackendApp.Model;

namespace BackendApp.Repository
{
    public class AdminRepository : IAdminRepository
    {
        private readonly RecipesDBContext _context;
        public AdminRepository(RecipesDBContext context)
        {
            _context = context;
        }
        public async Task<Admin> Create(Admin admin)
        {
            _context.Admins.Add(admin);
            await _context.SaveChangesAsync();
            return admin;
        }
    }
}
