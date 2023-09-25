namespace BackendApp.Model
{
    public class Recipe
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string PreparationDescription { get; set; }
        public List<Ingredient> Ingredients { get; set; } = new List<Ingredient>();
        public List<User> usersWhoBookMarked { get; set; } = new List<User>();
        public Recipe() { }
    }
}
