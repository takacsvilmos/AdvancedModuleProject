using Microsoft.AspNetCore.Identity;

namespace Backend.Model
{
    public class Employer
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string company_name { get; set; } = "";
        public List<string> field { get; } = new List<string>();
        public string address { get; set; } = "";
        public string phone { get; set; } = "";
        public string description { get; set; } = "";
        public List<JobOffer> job_offers { get; } = new List<JobOffer>();

        public Employer(string email)
        {
            Id = Guid.NewGuid();
            Email = email;
        }
    }
}
