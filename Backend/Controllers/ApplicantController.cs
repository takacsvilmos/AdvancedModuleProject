using Backend.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;
[ApiController]
[Route("[controller]")]
public class ApplicantController : ControllerBase
{
    private readonly IApplicantRepo _applicantRepo;

    public ApplicantController(IApplicantRepo applicantRepo)
    {
        _applicantRepo = applicantRepo;
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