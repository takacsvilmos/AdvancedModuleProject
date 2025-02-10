using Microsoft.AspNetCore.Identity;

namespace Backend.Services;

public interface ITokenService
{
    public string CreateToken(IdentityUser user, string role);
}