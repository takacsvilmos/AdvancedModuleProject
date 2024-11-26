namespace Backend.Services;

public interface IAuthService
{
    Task<AuthResult> RegisterAsync(string email, string username, string password);
}