using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace Backend.Model
{
    public class Employer
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string company_name { get; set; } = "";
        public List<string> field { get; init; } = new List<string>();
        public string address { get; set; } = "";
        public string phone { get; set; } = "";
        public string description { get; set; } = "";
        public ICollection<JobOffer> job_offers { get; init; } = new List<JobOffer>();

        public Employer(string email)
        {
            Id = Guid.NewGuid();
            Email = email;
        }
        public Employer()
        {
            Id = Guid.NewGuid(); // Initialize Id
        }
    }
}
