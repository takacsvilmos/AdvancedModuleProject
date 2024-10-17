public interface IAdminRepo
{
    List<string> GetAllUsers();
    string GetUserById();
    string UpdateUserById();
    string CreateUserByAdmin();
    string DeleteUserById();
}