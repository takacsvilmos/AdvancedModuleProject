namespace Backend.Model;

public class Applicant : User
{
    public Applicant(string role, string email, string password)
    {
        _id = new Guid();
        Email = email;
        Password = password;
        Role = role;
    }
}