using System.ComponentModel.DataAnnotations;

namespace Teniszpalya.API.Models
{
    public class PasswordReset
    {
        [Key]
        public int ID { get; set; }
        public required string Token { get; set; }
        public required long ExpiresAt { get; set; }
        public required int userID { get; set; }
    }
}