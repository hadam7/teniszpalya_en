using System.ComponentModel.DataAnnotations;

namespace Teniszpalya.API.Models
{
    public class Reservation
    {
        [Key]
        public int ID { get; set; }
        public required long CreatedAt { get; set; }
        public required long ReservedAt { get; set; }
        public required float Hours { get; set; }
        public required int UserID { get; set; }
        public required int CourtID { get; set; } 
    }
}