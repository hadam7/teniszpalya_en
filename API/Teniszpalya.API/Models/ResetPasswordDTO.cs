namespace Teniszpalya.API.Models
{
    public class ResetPasswordDTO
    {
        public required string Token { get; set; }
        public required string Password { get; set; }
    }
}