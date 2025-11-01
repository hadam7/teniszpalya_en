using System.ComponentModel.DataAnnotations;

namespace Teniszpalya.API.Models
{
    public class User
    {
        [Key]
        public int ID { get; set; }
        public required string FirstName { get; set; }
        public required string LastName { get; set; }
        [EmailAddress]
        public required string Email { get; set; }
        public required string PasswordHash { get; set; }
        public required string PhoneNumber { get; set; }
        public required int RoleID { get; set; }
    }
}