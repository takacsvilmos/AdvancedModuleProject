public class WorkExperience
{
    public Guid ApplicantId { get; set; }
    public Guid Id { get; set; } // _id helyett id
    public string Company { get; set; } = "Example Company";
    public string Role { get; set; } = "Role";
    public string StartingDate { get; set; } = "Starting date"; // Startingdate -> StartingDate
    public string EndDate { get; set; } = "Ending Date"; // Enddate -> EndDate
    public string Description { get; set; } = "Description";

    public WorkExperience(string company, string role, string startingDate, string endDate, string description, Guid applicantId)
    {
        Id = Guid.NewGuid();
        Company = company;
        Role = role;
        StartingDate = startingDate;
        EndDate = endDate;
        Description = description;
        ApplicantId = applicantId;
    }
}