using System.Net;
using System.Security.Claims;
using Backend.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Controllers;
[ApiController]
[Route("[controller]")]

public class AdminController : ControllerBase
{
    private readonly IAdminRepo _adminRepository;

    public AdminController(IAdminRepo adminRepository)
    {
        _adminRepository = adminRepository;
    }

    [HttpGet("test-auth"), Authorize(Roles = "Admin")]
    public IActionResult TestAuth()
    {
        var user = HttpContext.User;
        var roles = user.Claims
            .Where(c => c.Type == ClaimTypes.Role)
            .Select(c => c.Value)
            .ToList();

        return Ok(new { User = user.Identity.Name, Roles = roles });
    }
    
    [HttpGet("admin/users"), Authorize(Roles="Admin")]
    public async Task <IActionResult> GetAllUsers()
    {
        var result = await _adminRepository.GetAllUsers();
        return Ok(result);
    }
    
    [HttpPost("admin/users")]
    public IActionResult CreateUserByAdmin()
    {
        return Ok();
    }
    
    [HttpGet("admin/users/{id}")]
    public IActionResult GetUserById()
    {
        return Ok();
    }

    [HttpPut("admin/users/{id}")]
    public IActionResult UpdateUserById()
    {
        return Ok();
    }

    [HttpDelete("admin/users/{id}")]
    public IActionResult DeleteUserById()
    {
        return Ok();
    }
    
}