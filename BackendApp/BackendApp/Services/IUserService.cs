using BackendApp.DTO;
using BackendApp.Model;

namespace BackendApp.Services
{
    public interface IUserService
    {
        public Task<Admin> CreateAdmin(RegisterDTO registerDTO);
        public Task<User> CreateUser(RegisterDTO registerDTO);
        public Task<Cook> CreateCook(RegisterDTO registerDTO);
        public Task<List<CookDTO>> GetAllCooks();
        public Task<Cook> GetCookByUsername(string username);
        public Task<bool> BookmarkRecipe(string username, int recipeId);
        public Task<List<Recipe>> getBookmarkedRecipes(string username);
    }
}
