namespace BackendApp.Model
{
    // ovde su sastojci koje je admin dodao i koje moze da brise i oni se mogu dodavati u recept
    public class ExistingIngredient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string MeasurementUnit { get; set; }
        public ExistingIngredient() { }
    }
}
