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
        private readonly IRecipeRepository _recipeRepository;
        public UserService(IAdminRepository adminRepository, IUserRepository userRepository, ICookRepository cookRepository, IRecipeRepository recipeRepository)
        {
            _adminRepository = adminRepository;
            _userRepository = userRepository;
            _userRepository = userRepository;
            _cookRepository = cookRepository;
            _recipeRepository = recipeRepository;
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
        public async Task<List<CookDTO>> GetAllCooks()
        {
            var result = await _cookRepository.GetAll();
            List<CookDTO> cookDTOs = new List<CookDTO>();
            foreach(var cook in result)
            {
                CookDTO cookDTO = new CookDTO();
                cookDTO.Username = cook.Username;
                cookDTO.FirstName = cook.FirstName;
                cookDTO.LastName = cook.LastName;
                cookDTO.NumberOfRecipes = cook.Recipes.Count;
                cookDTOs.Add(cookDTO);
            }
            return cookDTOs;
        }
        public async Task<Cook> GetCookByUsername(string username)
        {
            Cook cook = await _cookRepository.GetByUsername(username);
            foreach(var recipe in cook.Recipes)
            {
                recipe.Ingredients = await _recipeRepository.GetRecipeIngredients(recipe.Id);
            }
            return cook;
        }
    }
}
