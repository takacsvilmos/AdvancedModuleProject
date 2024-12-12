namespace Backend.Model;

public class Applicant : User
{
    public int Age { get; set; } = 0;
    public string Name { get; set; } = "Name";
    public List<string> Language { get; set; } = new List<string>{"English","Spanish","Deautsch"};
    public List<string> Profession { get; set; } = new List<string>{"Profession"};
    public string Address { get; set; } = "Address";
    public string Phone { get; set; } = "Phone number";
    public string Description { get; set; } = "Description";
    public List<WorkExperience> WorkExperience { get; set; } = new List<WorkExperience>{new WorkExperience("Example Company","Role","Starting date","Ending Date","Description")};
    public string Image { get; set; } = "";
    public List<JobOffer> JobOffers = new List<JobOffer>();
    
    public Applicant(string role, string username, string email, string password)
    {
        _id = new Guid();
        Email = email;
        Username = username;
        Password = password;
        Role = role;
    }
    
}