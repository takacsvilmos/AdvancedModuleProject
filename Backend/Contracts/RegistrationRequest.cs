using System.ComponentModel.DataAnnotations;

namespace Backend.Model;

public record RegistrationRequest
(
    [Required] string Email,
    [Required] string Username,
    [Required] string Password,
    [Required] string Role
);

    
