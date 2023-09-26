using BackendApp.Model;

namespace BackendApp.Repository
{
    public interface ICookRepository
    {
        public Task<Cook> Create(Cook cook);
        public Task<bool> CanCookDelete(string cookUsername, int recipeId);
        public Task<List<Cook>> GetAll();
        public Task<Cook> GetByUsername(string username);
    }
}
