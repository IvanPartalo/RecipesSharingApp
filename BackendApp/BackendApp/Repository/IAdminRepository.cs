using BackendApp.Model;

namespace BackendApp.Repository
{
    public interface IAdminRepository
    {
        public Task<Admin> Create(Admin admin);
    }
}
