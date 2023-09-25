namespace BackendApp.Model
{
    public class Ingredient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Quantity { get; set; }
        public string MeasurementUnit { get; set; }
        public Ingredient() { }
    }
}
