namespace BackendApp.Model
{
    public class Cook
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public List<Recipe> Recipes { get; set; } = new List<Recipe>();
        public Cook() { }
    }
}
