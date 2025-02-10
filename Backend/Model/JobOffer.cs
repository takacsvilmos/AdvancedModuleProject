namespace Backend.Model;

public class JobOffer
{
    public Guid Id { get; set; }
    public string name { get; set; } = "";
    public string CompanyName { get; set; } = "PlaceholderCompanyName";
    public string location { get; set; } = "";
    public int rating  { get; set; }
    public string recommendedFor { get; set; }
    public string date { get; set; }
    public string Email { get; set; } = "";
    public string description { get; set; } = "";

    // Foreign Key to reference the Employer
    public Guid EmployerId { get; set; } // Foreign Key

    public Employer Employer { get; set; }
    public JobOffer(Guid employerId)
    {
        Id = Guid.NewGuid();
        EmployerId = employerId;
    }
}