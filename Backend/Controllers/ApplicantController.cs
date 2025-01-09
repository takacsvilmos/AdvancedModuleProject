
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Backend.Data;

namespace Backend.Controllers;
[ApiController]
[Route("/api/[controller]")]
public class ApplicantController : ControllerBase
{
    private readonly ApplicationDbContext _context;

    public ApplicantController(ApplicationDbContext context)
    {
        _context = context;
    }
    
    [HttpGet("Profile"), Authorize]
    public IActionResult Profile()
    {
        var email = HttpContext.User.FindFirst(ClaimTypes.Email).Value;

        return Ok(email);
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
    
    [HttpGet("jobOffers")]
    public IActionResult GetAllJobOffers()
    {
        return Ok(_context.JobOffers);
    }
    
    [HttpGet("employers")]
    public IActionResult GetAllEmployers()
    {
        return Ok(_context.Employers);
    }

}