using Backend.Data;
using Backend.Model;
using Backend.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers;
[ApiController]
[Route("[controller]")]
public class ServiceController : ControllerBase
{
    private readonly IServicesRepo _blueprintJobsRepo;
    private readonly ApplicationDbContext _context;

    public ServiceController(IServicesRepo blueJobsRepo, ApplicationDbContext context)
    {
        _blueprintJobsRepo = blueJobsRepo;
        _context = context;
    }

    [HttpGet("jobs")]
    public IActionResult GetAllJobOffers()
    {
        var jobs = new List<string> { "Welder", "Painter", "Dogsitter" };
        return Ok(jobs);
    }

    [HttpPost("login")]
    public IActionResult Login()
    {
        throw new NotImplementedException();
    }

    [HttpPost("signUp")]
    public IActionResult SignUp()
    {
        throw new NotImplementedException();
    }
    
    [HttpGet]
    public async Task<ActionResult<IEnumerable<User>>> GetUsers()
    {
        return await _context.Users.ToListAsync();
    }
    
    [HttpPost("db")]
    public async Task<ActionResult<User>> CreateUser(User user)
    {
        _context.Users.Add(user);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetUsers), new { id = new Guid() }, user);
    }

}