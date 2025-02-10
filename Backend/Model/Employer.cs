using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;

namespace Backend.Model
{
    public class Employer
    {
        public Guid Id { get; set; }
        public string Email { get; set; }
        public string CompanyName { get; set; } = "";
        public List<string> Field { get; init; } = new List<string>();
        public string Address { get; set; } = "";
        public string Phone { get; set; } = "";
        public string Description { get; set; } = "";
        public ICollection<JobOffer> JobOffers { get; init; } = new List<JobOffer>();

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
