using System.ComponentModel.DataAnnotations;

namespace Teniszpalya.API.Models
{
    public class ProfileDTO
    {
        public required string FirstName { get; set; }
        public required string LastName { get; set; }

        [EmailAddress]
        public required string Email { get; set; }
        public required string PhoneNumber { get; set; }        
    }
}