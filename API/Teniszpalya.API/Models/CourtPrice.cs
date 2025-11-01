using System.ComponentModel.DataAnnotations;
using Teniszpalya.API.Data;

namespace Teniszpalya.API.Models
{
    public class CourtPrice
    {
        [Key]
        public int ID { get; set; }
        public bool Outdoor { get; set; }
        public Season Season { get; set; }
        public int Price { get; set; }
        public long ValidFrom { get; set; }
        public long ValidTo { get; set; }
    }
}