using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Teniszpalya.API.Data;
using Teniszpalya.API.Models;

namespace Teniszpalya.API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class ForgotPasswordController : ControllerBase
    {
        private readonly AppDBContext _context;

        public ForgotPasswordController(AppDBContext context)
        {
            _context = context;
        }

        [AllowAnonymous]
        [HttpPost]
        public async Task<IActionResult> ForgotPassword(ForgotPasswordDTO forgotDTO)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == forgotDTO.Email);

            if (user == null) return Ok(new { message = "If your email exists, you will receive a reset link." });

            var token = Guid.NewGuid().ToString();

            var reset = new PasswordReset
            {
                Token = token,
                ExpiresAt = DateTimeOffset.UtcNow.AddHours(1).ToUnixTimeSeconds(),
                userID = user.ID
            };

            _context.PasswordResets.Add(reset);
            await _context.SaveChangesAsync();

            var resetLink = $"http://localhost:5173/reset-password?token={token}";

            Console.WriteLine($"Password reset link for {user.Email}: {resetLink}");
            return Ok(new {message = "If your email exists, you will receive a reset link."});
        }
    }
}