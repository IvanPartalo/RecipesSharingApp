using BackendApp.DTO;
using BackendApp.Model;
using BackendApp.Repository;

namespace BackendApp.Services
{
    public class UserService : IUserService
    {
        private readonly IAdminRepository _adminRepository;
        private readonly IUserRepository _userRepository;
        private readonly ICookRepository _cookRepository;
        public UserService(IAdminRepository adminRepository, IUserRepository userRepository, ICookRepository cookRepository)
        {
            _adminRepository = adminRepository;
            _userRepository = userRepository;
            _userRepository = userRepository;
            _cookRepository = cookRepository;
        }
        public async Task<Admin> CreateAdmin(RegisterDTO registerDTO)
        {
            Admin admin = new Admin();
            admin.FirstName = registerDTO.FirstName;
            admin.LastName = registerDTO.LastName;
            admin.Username = registerDTO.Username;
            return await _adminRepository.Create(admin);
        }
        public async Task<User> CreateUser(RegisterDTO registerDTO)
        {
            User user = new User();
            user.FirstName = registerDTO.FirstName;
            user.LastName = registerDTO.LastName;
            user.Username = registerDTO.Username;
            return await _userRepository.Create(user);
        }
        public async Task<Cook> CreateCook(RegisterDTO registerDTO)
        {
            Cook cook = new Cook();
            cook.FirstName = registerDTO.FirstName;
            cook.LastName = registerDTO.LastName;
            cook.Username = registerDTO.Username;
            return await _cookRepository.Create(cook);
        }
    }
}
