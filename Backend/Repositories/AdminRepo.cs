namespace Backend.Repositories;

public class AdminRepo : IAdminRepo
{
    public List<string> GetAllUsers()
    {
        return new List<string>{"Admin","Admin2","Admin3","Admin4","Admin5"};
    }
}