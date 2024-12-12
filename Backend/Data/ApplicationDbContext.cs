using Backend.Model;
using Microsoft.EntityFrameworkCore;

namespace Backend.Data;

public class ApplicationDbContext : DbContext
{
    public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
    {
    }

    public DbSet<Applicant> Applicants { get; set; }
    public DbSet<Employer> Employers { get; set; }

    // Add DbSet properties here, e.g., for a User model:
}