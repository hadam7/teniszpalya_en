using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Teniszpalya.API.Data;
using Teniszpalya.API.Models;

namespace Teniszpalya.API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class RegisterController : ControllerBase
    {
        private readonly AppDBContext _context;

        public RegisterController(AppDBContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Register(UserDTO userDTO)
        {
            if (!ModelState.IsValid) return BadRequest(ModelState);

            if (await _context.Users.AnyAsync(u => u.Email == userDTO.Email))
            {
                return BadRequest(new { message = "Email already in use." });
            }
            
            if(await _context.Users.AnyAsync(u => u.PhoneNumber == userDTO.PhoneNumber))
            {
                return BadRequest(new { message = "Phone Number already in use." });
            }

            var user = new User
            {
                FirstName = userDTO.FirstName.Trim(),
                LastName = userDTO.LastName.Trim(),
                Email = userDTO.Email.Trim(),
                PhoneNumber = userDTO.PhoneNumber.Trim(),
                PasswordHash = BCrypt.Net.BCrypt.HashPassword(userDTO.Password.Trim()),
                RoleID = 1
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return Ok(new { message = "User registered successfully" });

        }
    }
}