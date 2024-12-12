namespace Backend.Model.UserMaker;

public static class UserMaker
{
    public static User CreateUser(string role, string username, string email, string password)
    {
        if (role == "Applicant")
        {
            return new Applicant(role, username,email, password);
        }else if (role == "Employer")
        {
            return new Employer(role, email, password);
        }
        else
        {
            throw new Exception("Invalid role");
        }
    }
}