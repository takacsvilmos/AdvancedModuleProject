namespace Backend.DTOs
{
    public class JobOfferDto
    {
        public Guid Id { get; init; } 
        public string name { get; set; }
        public string location { get; set; }
        public int rating { get; set; }

        public string recommendedFor { get; set; }

        public string date { get; set; }

        public string description { get; set; }
        public Guid CompanyId { get; init; }

    }
}
