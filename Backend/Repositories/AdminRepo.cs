namespace Backend.Repositories;

public class AdminRepo : IAdminRepo
{
    private List<string> users = new List<string> { "Admin", "Admin2", "Admin3", "Admin4", "Admin5" };
    public async Task<List<string>> GetAllUsers()
    {
        return users;
    }

    public string GetUserById()
    {
        throw new NotImplementedException();
    }

    public string UpdateUserById()
    {
        throw new NotImplementedException();
    }

    public string CreateUserByAdmin()
    {
        throw new NotImplementedException();
    }

    public string DeleteUserById()
    {
        throw new NotImplementedException();
    }
}