using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Teniszpalya.API.Data;
using Teniszpalya.API.Models;

namespace Teniszpalya.API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class ResetPasswordController : ControllerBase
    {
        private readonly AppDBContext _context;

        public ResetPasswordController(AppDBContext context)
        {
            _context = context;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> ResetPassword(ResetPasswordDTO resetDTO)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            var reset = await _context.PasswordResets.FirstOrDefaultAsync(r => r.Token == resetDTO.Token);

            if (reset == null || reset.ExpiresAt < DateTimeOffset.UtcNow.ToUnixTimeSeconds())
            {
                return BadRequest(new { message = "The token has expired." });
            }

            var user = await _context.Users.FindAsync(reset.userID);

            if (user == null) return BadRequest(new { message = "User not found." });

            user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(resetDTO.Password);
            _context.PasswordResets.Remove(reset);
            await _context.SaveChangesAsync();
            return Ok(new { message = "Password reset sucessfully" });
        }
    }
}