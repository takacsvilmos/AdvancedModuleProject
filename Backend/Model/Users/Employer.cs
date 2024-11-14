namespace Backend.Model;

public class Employer : User
{
    public Employer(string role, string email, string password)
    {
        _id = new Guid();
        Email = email;
        Password = password;
        Role = role;
    }
}