using Backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;
[ApiController]
[Route("[controller]")]

public class EmployerController : ControllerBase
{
    private readonly IEmployerRepo _employerRepo;

    public EmployerController(IEmployerRepo employerRepo)
    {
        _employerRepo = employerRepo;
    }

    [HttpPost("employer/offer/create")]
    public IActionResult CreateOffer()
    {
        throw new NotImplementedException();
    }
    
    [HttpPatch("employer/offer/update")]
    public IActionResult UpdateOffer()
    {
        throw new NotImplementedException();
    }
    
    [HttpGet("employer/applicants")]
    public IActionResult GetApplicants()
    {
        throw new NotImplementedException();
    }
}