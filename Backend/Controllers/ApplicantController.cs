
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;

namespace Backend.Controllers;
[ApiController]
[Route("/api/[controller]")]
public class ApplicantController : ControllerBase
{
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

}