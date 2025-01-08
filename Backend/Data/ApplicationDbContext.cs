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
    public DbSet<JobOffer> JobOffers { get; set; }
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configure the one-to-many relationship
        modelBuilder.Entity<Employer>()
            .HasMany(e => e.JobOffers)
            .WithOne(j => j.Employer)
            .HasForeignKey(j => j.EmployerId)
            .OnDelete(DeleteBehavior.Cascade); // Cascading delete, if desired
    }
}