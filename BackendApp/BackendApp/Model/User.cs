namespace BackendApp.Model
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public List<Recipe> RecipesBookmark { get; set; } = new List<Recipe>();
        public User() { }
    }
}
