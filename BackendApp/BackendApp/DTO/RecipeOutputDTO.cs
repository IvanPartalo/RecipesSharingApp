using BackendApp.Model;

namespace BackendApp.DTO
{
    public class RecipeOutputDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string PreparationDescription { get; set; }
        public List<Ingredient> Ingredients { get; set; } = new List<Ingredient>();
        public List<string> UsersWhoBookmarked { get; set; } = new List<string>();
        public RecipeOutputDTO(int id, string name, string preparationDescription, List<Ingredient> ingredients) 
        {
            Id = id;
            Name = name;
            PreparationDescription = preparationDescription;
            Ingredients = ingredients;
        }
    }
}
