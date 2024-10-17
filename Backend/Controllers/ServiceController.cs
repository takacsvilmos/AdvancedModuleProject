using Backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;
[ApiController]
[Route("[controller]")]
public class ServiceController : ControllerBase
{
    private readonly IServicesRepo _blueprintJobsRepo;

    public ServiceController(IServicesRepo blueJobsRepo)
    {
        _blueprintJobsRepo = blueJobsRepo;
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

}