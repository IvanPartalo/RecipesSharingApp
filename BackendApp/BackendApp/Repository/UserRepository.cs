using BackendApp.DBContext;
using BackendApp.Model;

namespace BackendApp.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly RecipesDBContext _context;
        public UserRepository(RecipesDBContext context)
        {
            _context = context;
        }
        public async Task<User> Create(User user)
        {
            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return user;
        }
    }
}
