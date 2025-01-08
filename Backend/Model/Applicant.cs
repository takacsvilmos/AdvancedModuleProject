using Microsoft.AspNetCore.Identity;

namespace Backend.Model
{
    public class Applicant
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public int Age { get; set; } = 0;
        public string Name { get; set; } = "Name";
        public List<string> Language { get; set; } = new List<string>{"English","Spanish","Deutsch"};
        public List<string> Profession { get; set; } = new List<string>{"Profession"};
        public string Address { get; set; } = "Address";
        public string Phone { get; set; } = "Phone number";
        public string Description { get; set; } = "Description";
        public List<WorkExperience> WorkExperience { get; } = new List<WorkExperience>();
        public string Image { get; set; } = "";
        public List<JobOffer> JobOffers = new List<JobOffer>();

        public Applicant(string email)
        {
            Id = Guid.NewGuid();
            Email = email;
        }
    }
}
