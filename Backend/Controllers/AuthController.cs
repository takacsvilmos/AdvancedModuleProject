using Backend.Model;
using Backend.Services;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;

[ApiController]
[Route("/api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authenticationService;
    private static readonly Applicant HardcodedUser = new ("Applicant", "JohnDoe","john.doe@example.com", "password123");

    public AuthController(IAuthService authenticationService)
    {
        _authenticationService = authenticationService;
    }

    [HttpPost("Register")]
    public async Task<ActionResult<RegistrationResponse>> Register(RegistrationRequest request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var result = await _authenticationService.RegisterAsync(request.Email, request.Username, request.Password, request.Role);
        Console.WriteLine(result);
        if (!result.Success)
        {
            AddErrors(result);
            return BadRequest(ModelState);
        }

        return CreatedAtAction(nameof(Register), new RegistrationResponse(result.Email, result.UserName));
    }

    [HttpPost("Login")]
    public IActionResult Login([FromBody] LoginRequest request)
    {
        return Ok(HardcodedUser);
    }

    [HttpPut("UpdateWorkExperience")]
    public IActionResult UpdateWorkExperience([FromBody] WorkExperience request)
    {
        try
        {
            HardcodedUser.WorkExperience.Add(request);
            return Ok(new { message = "Work experience added successfully", updatedUser = HardcodedUser });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { message = "An error occurred", error = ex.Message });
        }
    }
    
    /*[HttpPost("Login")]
    public async Task<ActionResult<AuthResponse>> Authenticate([FromBody] AuthRequest request)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest(ModelState);
        }

        var result = await _authenticationService.LoginAsync(request.Email, request.Password);

        if (!result.Success)
        {
            AddErrors(result);
            return BadRequest(ModelState);
        }

        return Ok(new AuthResponse(result.Email, result.UserName, result.Token));
    }*/

    private void AddErrors(AuthResult result)
    {
        foreach (var error in result.ErrorMessages)
        {
            ModelState.AddModelError(error.Key, error.Value);
        }
    }
    [HttpGet("getData")]
    public IActionResult GetApplicants([FromQuery] string username)
    {
        //search in database
        try
        {
            if (string.IsNullOrEmpty(username))
            {
                return BadRequest(new { message = "Username is required" });
            }

            if (HardcodedUser.Username != username)
            {
                return Unauthorized(new { message = "Unauthorized" });
            }

            return Ok(HardcodedUser);
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Error in GetApplicants: {ex.Message}");
            return StatusCode(500, new { message = "Internal Server Error", error = ex.Message });
        }
    }
}