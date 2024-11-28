namespace Backend.Repositories;

public interface IAdminRepo
{
    Task<List<string>> GetAllUsers();
    string GetUserById();
    string UpdateUserById();
    string CreateUserByAdmin();
    string DeleteUserById();
}