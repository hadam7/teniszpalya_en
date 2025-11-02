namespace Teniszpalya.API.Models
{
    public class ChangePasswordDTO
    {
        public required string Password { get; set; }
        public required string NewPassword { get; set; }
    }
}