using Microsoft.EntityFrameworkCore;
using Teniszpalya.API.Models;

namespace Teniszpalya.API.Data
{
    public class AppDBContext : DbContext
    {
        public AppDBContext(DbContextOptions<AppDBContext> options)
            : base(options)
        {
        }

        public DbSet<Court> Courts { get; set; }
        public DbSet<CourtPrice> CourtPrices { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<PasswordReset> PasswordResets { get; set; }
    }
}
