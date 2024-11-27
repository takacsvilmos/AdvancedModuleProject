using System.Globalization;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Backend.Model;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;

namespace Backend.Services;

public class TokenService : ITokenService
{
    private const int ExpirationMinutes = 30;
    private readonly IConfiguration _configuration;
    
    public TokenService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public string CreateToken(IdentityUser user, string role)
    {
        var expiration = DateTime.UtcNow.AddMinutes(ExpirationMinutes);
        var token = CreateJwtToken(
            CreateClaims(user, role),
            CreateSigningCredentials(),
            expiration
        );
        var tokenHandler = new JwtSecurityTokenHandler();
        return tokenHandler.WriteToken(token);
    }

    private JwtSecurityToken CreateJwtToken(List<Claim> claims, SigningCredentials credentials,
        DateTime expiration) {
        var issuer = _configuration["JwtConfig:ValidIssuer"];
        var audience = _configuration["JwtConfig:ValidAudience"];
        
        return new(
            issuer,
            audience,
            claims,
            expires: expiration,
            signingCredentials: credentials
        );
    }
        

    private List<Claim> CreateClaims(IdentityUser user, string? role)
    {
        try
        {
            var claims = new List<Claim>
            {
                new(JwtRegisteredClaimNames.Sub, "TokenForTheApiWithAuth"),
                new(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new(JwtRegisteredClaimNames.Iat, EpochTime.GetIntDate(DateTime.UtcNow).ToString(CultureInfo.InvariantCulture), ClaimValueTypes.Integer64),
                new(ClaimTypes.NameIdentifier, user.Id),
                new(ClaimTypes.Name, user.UserName),
                new(ClaimTypes.Email, user.Email),
            };

            if (role != null)
            {
                claims.Add(new Claim(ClaimTypes.Role, role));
            }

            return claims;
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            throw;
        }
    }

    private SigningCredentials CreateSigningCredentials()
    {
        return new SigningCredentials(
            new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes("!SomethingSecret!!SomethingSecret!")
            ),
            SecurityAlgorithms.HmacSha256
        );
    }
}