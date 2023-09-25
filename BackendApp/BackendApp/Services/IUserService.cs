using BackendApp.DTO;
using BackendApp.Model;

namespace BackendApp.Services
{
    public interface IUserService
    {
        public Task<Admin> CreateAdmin(RegisterDTO registerDTO);
        public Task<User> CreateUser(RegisterDTO registerDTO);
        public Task<Cook> CreateCook(RegisterDTO registerDTO);
    }
}
