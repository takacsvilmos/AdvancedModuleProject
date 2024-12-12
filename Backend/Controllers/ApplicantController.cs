
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;
[ApiController]
[Route("/api/[controller]")]
public class ApplicantController : ControllerBase
{

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