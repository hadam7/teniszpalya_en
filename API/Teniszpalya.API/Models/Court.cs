using System.ComponentModel.DataAnnotations;

namespace Teniszpalya.API.Models
{
    public class Court
    {
        [Key]
        public int ID { get; set; }
        public bool Outdoors { get; set; }
        public required string Material { get; set; } = "DefaultMaterial";
    }
}