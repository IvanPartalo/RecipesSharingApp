using BackendApp.Model;

namespace BackendApp.Repository
{
    public interface IUserRepository
    {
        public Task<User> Create(User user);
    }
}
