using Backend.Model;
using Backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;
[ApiController]
[Route("/api/[controller]")]
public class ApplicantController : ControllerBase
{
    private readonly IApplicantRepo _applicantRepo;
    private static readonly Applicant HardcodedUser = new ("Applicant", "JohnDoe","john.doe@example.com", "password123");

    public ApplicantController(IApplicantRepo applicantRepo)
    {
        _applicantRepo = applicantRepo;
    }
    
    [HttpGet("getData")]
    public IActionResult GetApplicants([FromQuery] string username)
    {
        try
        {
            if (string.IsNullOrEmpty(username))
            {
                return BadRequest(new { message = "Username is required" });
            }

            if (HardcodedUser.Username != username)
            {
                return Unauthorized(new { message = "Unauthorized" });
            }

            return Ok(HardcodedUser);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error in GetApplicants: {ex.Message}");
            return StatusCode(500, new { message = "Internal Server Error", error = ex.Message });
        }
    }

    [HttpPut("update")]
    public IActionResult UpdatePersonalData()
    {
        throw new NotImplementedException();
    }

    [HttpPost("uploadCV")]
    public IActionResult UpdateCV()
    {
        throw new NotImplementedException();
    }

    [HttpDelete("delete")]
    public IActionResult DeleteCV()
    {
        throw new NotImplementedException();
    }

}