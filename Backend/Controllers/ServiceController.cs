using Backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;
[ApiController]
[Route("[controller]")]
public class ServiceController : ControllerBase
{
    private readonly IBlueJobsRepo _blueprintJobsRepo;

    public ServiceController(IBlueJobsRepo blueJobsRepo)
    {
        _blueprintJobsRepo = blueJobsRepo;
    }

    [HttpGet("jobs")]
    public IActionResult GetAllJobOffers()
    {
        throw new NotImplementedException();
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