namespace BackendApp.Model
{
    // ovo su sastojci koji su sacuvani kada je napravljen recept tako da ako se obrise neki sastojak
    // nece se vise moci dodavati ali ce ostati sacuvan u starom receptu
    public class Ingredient
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Quantity { get; set; }
        public string MeasurementUnit { get; set; }
        public Ingredient() { }
    }
}
