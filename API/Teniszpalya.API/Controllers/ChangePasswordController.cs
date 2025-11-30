using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Teniszpalya.API.Data;
using Teniszpalya.API.Models;

namespace Teniszpalya.API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class ChangePasswordController : ControllerBase
    {
        private readonly AppDBContext _context;

        public ChangePasswordController(AppDBContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpPost]
        public async Task<IActionResult> ChangePassword(ChangePasswordDTO passwordDTO)
        {
            var userID = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (userID == null) return NotFound();

            var user = await _context.Users.FindAsync(int.Parse(userID));

            if (user == null) return NotFound();

            if (!BCrypt.Net.BCrypt.Verify(passwordDTO.Password, user.PasswordHash))
            {
                return Unauthorized(new { message = "Invalid password." });
            }

            user.PasswordHash = BCrypt.Net.BCrypt.HashPassword(passwordDTO.NewPassword);
            await _context.SaveChangesAsync();
            return Ok(new { message = "Password updated sucessfully." });
        }
    }
}