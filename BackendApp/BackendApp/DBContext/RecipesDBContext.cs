using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using BackendApp.Model;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;

namespace BackendApp.DBContext
{
    public class RecipesDBContext : IdentityDbContext<IdentityUser>
    {
        public RecipesDBContext() { }
        public DbSet<User> Users { get; set; }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Cook> Cooks { get; set; }
        public DbSet<Recipe> Recipes { get; set; }
        public DbSet<Ingredient> Ingredients { get; set; }
        public DbSet<ExistingIngredient> ExistingIngredients { get; set; }
        public RecipesDBContext(DbContextOptions options) : base(options)
        {
        }
    }
}
