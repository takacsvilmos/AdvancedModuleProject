using System.ComponentModel.DataAnnotations;

namespace Backend.Model;

public class User
{
    [Key]
    public Guid _id { get; set; }
    public string Username { get; set; }
    public string Password { get; set; }
    public string Email { get; set; }
    public string Role { get; set; }
}