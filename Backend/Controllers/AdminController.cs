using Backend.Repositories;
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

    [HttpGet("admin")]
    public IActionResult GetAllUsers()
    {
        var result = _adminRepository.GetAllUsers();
        return Ok(result);
    }
}