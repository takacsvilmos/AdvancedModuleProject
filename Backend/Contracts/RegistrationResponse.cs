using System.ComponentModel.DataAnnotations;

namespace Backend.Model;

public record RegistrationResponse
(
    string Email, 
    string UserName
);
