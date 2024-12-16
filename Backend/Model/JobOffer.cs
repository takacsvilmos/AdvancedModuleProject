namespace Backend.Model;

public class JobOffer
{
    public Guid Id { get; set; }
    public string EmployerEmail { get; set; }
    public string CompanyName { get; set; } = "PlaceholderCompanyName";
    public List<string> Field { get; init; } = new List<string>();
    public string Location { get; set; } = "";
    public int RequiredYearsOfExperience { get; set; } = 0;
    public int Salary { get; set; } = 0;
    public int WorkingHours { get; set; } = 0;
    public string PhoneNumber { get; set; } = "";
    public string Email { get; set; } = "";
    public string Description { get; set; } = "";
    public string PicUrl { get; set; } = "";

    // Foreign Key to reference the Employer
    public Guid EmployerId { get; set; } // Foreign Key

    // Navigation property to the related Employer
    public Employer Employer { get; set; }
    public JobOffer(Guid employerId, string employerEmail)
    {
        Id = Guid.NewGuid();
        EmployerId = employerId;
        EmployerEmail = employerEmail;
    }
}