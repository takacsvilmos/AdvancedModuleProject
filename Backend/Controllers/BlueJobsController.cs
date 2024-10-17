using Backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;
[ApiController]
[Route("[controller]")]
public class BlueJobsController : ControllerBase
{
    private readonly IBlueJobsRepo _blueprintJobsRepo;

    public BlueJobsController(IBlueJobsRepo blueJobsRepo)
    {
        _blueprintJobsRepo = blueJobsRepo;
    }

    [HttpGet("jobs")]
    public IActionResult GetAllJobOffers()
    {
        throw new NotImplementedException();
    }

    [HttpGet("employers")]
    public IActionResult GetAllEmployers()
    {
        throw new NotImplementedException();
    }

    [HttpGet("applicants")]
    public IActionResult GetAllApplicants()
    {
        throw new NotImplementedException();
    }

}