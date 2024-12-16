using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Backend.Data;
using Backend.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers;
[ApiController]
[Route("/api/[controller]")]

public class EmployerController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public EmployerController(ApplicationDbContext context)
    {
        _context = context;
    }

    [HttpPost("/CreateOffer"), Authorize]
    public async Task<IActionResult> CreateOffer()
    {
        string emailFromToken = HttpContext.User.FindFirst(ClaimTypes.Email)?.Value;

        // Find the authorized employer
        var authorizedEmployer = await _context.Employers
            .Include(e => e.job_offers) // Ensure job_offers are loaded
            .FirstOrDefaultAsync(employer => employer.Email == emailFromToken);

        // Null check
        if (authorizedEmployer == null)
        {
            return NotFound("Employer not found or account does not exist.");
        }

        // Log for debugging
        Console.WriteLine($"authorizedEmployerId: {authorizedEmployer.Id}");
        Console.WriteLine($"authorizedEmployerEmail: {authorizedEmployer.Email}");
        Console.WriteLine($"authorizedEmployerCompany: {authorizedEmployer.company_name}");

        // Create a new JobOffer
        var jobOffer = new JobOffer(authorizedEmployer.Id, authorizedEmployer.Email);

        // Add the job offer to the database explicitly
        _context.JobOffers.Add(jobOffer);

        // Save changes
        await _context.SaveChangesAsync();

        return Ok($"{jobOffer.Id} is created.");

    }
    
}