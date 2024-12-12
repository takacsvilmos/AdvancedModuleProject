using Backend.Data;
using Backend.Model;
using Backend.Model.UserMaker;
using Backend.Repositories;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers;
[ApiController]
[Route("api/[controller]")]
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
    public IActionResult Login([FromBody] LoginRequest loginRequest)
    {

        return Ok("jeee");
        //var user = _context.Users.FirstOrDefault(u => u.Email == loginRequest.Email);
        //if (user == null)
        //{
        //    return Unauthorized(new{message = "User not found"});
        //}else if (user.Password != loginRequest.Password)
        //{
        //    return Unauthorized(new{message = "Incorrect email or password"});
        //}

        //return Ok(new { message = "Login successful", user });
    }

    [HttpPost("signUp")]
    public async Task<ActionResult<User>> SignUp([FromBody] User user)
    {
        var newUser = UserMaker.CreateUser(user.Role, user.Username,user.Email, user.Password);
        _context.Users.Add(newUser);
        await _context.SaveChangesAsync();
        return CreatedAtAction(nameof(GetUsers), new { id = newUser._id}, user);
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