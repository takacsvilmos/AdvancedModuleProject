using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using Backend.Data;
using Backend.DTOs;
using Backend.Model;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System.Reflection;

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

    [HttpPost("CreateOffer"), Authorize]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [ProducesResponseType(StatusCodes.Status404NotFound)]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public async Task<ActionResult<ResponseDto>> CreateOffer([FromBody] JobOfferDto jobOfferDto)
    {
        string emailFromToken = HttpContext.User.FindFirst(ClaimTypes.Email)?.Value;
        
        Console.WriteLine($"Email from token: {emailFromToken}");

        if (string.IsNullOrEmpty(emailFromToken))
        {
            return Unauthorized("Invalid or missing email claim in the token.");
        }

        var authorizedEmployer = await _context.Employers
            .Include(e => e.JobOffers)
            .FirstOrDefaultAsync(employer => employer.Email == emailFromToken);

        if (authorizedEmployer == null)
        {
            return NotFound("Employer not found or account does not exist.");
        }


        var jobOffer = new JobOffer(authorizedEmployer.Id)
        {
            CompanyName = authorizedEmployer.CompanyName, 
            Email = authorizedEmployer.Email,
            name = jobOfferDto.name,
            location = jobOfferDto.location,
            rating = jobOfferDto.rating,
            recommendedFor = jobOfferDto.recommendedFor,
            date = jobOfferDto.date,
            description = jobOfferDto.description
        };

        _context.JobOffers.Add(jobOffer);

        await _context.SaveChangesAsync();

        return CreatedAtAction(nameof(CreateOffer), new {Message = "job offer created"});

    }

    [HttpGet("{email}/{jobOfferId}"), Authorize]
    public async Task<ActionResult> GetJobOffer(string jobOfferId)
    {
        var emailFromToken = HttpContext.User.FindFirst(ClaimTypes.Email)?.Value;

        if (string.IsNullOrEmpty(emailFromToken))
        {
            return Unauthorized("Invalid or missing email claim in the token.");
        }

        var searchedJobOffer = _context.JobOffers.FirstOrDefault(jobOffer => jobOffer.Id.ToString() == jobOfferId);

        return Ok(searchedJobOffer);
    }

    [HttpGet("{email}/jobOffers"), Authorize]
    public async Task<ActionResult> GetJobOffer()
    {
        var emailFromToken = HttpContext.User.FindFirst(ClaimTypes.Email)?.Value;

        if (string.IsNullOrEmpty(emailFromToken))
        {
            return Unauthorized("Invalid or missing email claim in the token.");
        }

        var searchedJobOffers = _context.JobOffers.Where(jobOffer => jobOffer.Email == emailFromToken);

        return Ok(searchedJobOffers);
    }

    [HttpGet("{email}"), Authorize]
    public async Task<ActionResult<EmployerDto>> GetEmployerData()
    {
        string emailFromToken = HttpContext.User.FindFirst(ClaimTypes.Email).Value;
        Console.WriteLine($"Email from token: {emailFromToken}");
        if (string.IsNullOrEmpty(emailFromToken))
        {
            return Unauthorized("Invalid or missing email claim in the token.");
        }

        var user = _context.Employers.FirstOrDefault(employer => employer.Email == emailFromToken);
        if (user == null)
        {
            return NotFound("There is no user with those specifications");
        }

        var EmployerDto = new EmployerDto
        {
            Address = user.Address,
            CompanyName = user.CompanyName,
            Email = user.Email,
            Description = user.Description,
            Field = user.Field,
            Id = user.Id,
            Phone = user.Phone
        };

        return Ok(EmployerDto);
    }

    [HttpPatch("{email}"), Authorize]
    public async Task<ActionResult> EditEmployerData([FromBody] EmployerDto employerData)
    {
        string emailFromToken = HttpContext.User.FindFirst(ClaimTypes.Email).Value;
        if (string.IsNullOrEmpty(emailFromToken))
        {
            return Unauthorized("Invalid or missing email claim in the token.");
        }

        var user = _context.Employers.FirstOrDefault(employer => employer.Email == emailFromToken);
        if (user == null)
        {
            return NotFound("There is no user with those specifications");
        }

        user.CompanyName = employerData.CompanyName;
        user.Address = employerData.Address;
        user.Description = employerData.Description;
        user.Phone = employerData.Phone;

        await _context.SaveChangesAsync();

        return Ok("User data edited successfully");
    } 

    

}