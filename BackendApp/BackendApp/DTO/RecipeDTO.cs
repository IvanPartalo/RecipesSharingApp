
namespace BackendApp.DTO
{
    public class RecipeDTO
    {
        public string Name { get; set; }
        public string PreparationDescription { get; set; }
        public List<IngredientDTO> Ingredients { get; set; } = new List<IngredientDTO>();
    }
}
