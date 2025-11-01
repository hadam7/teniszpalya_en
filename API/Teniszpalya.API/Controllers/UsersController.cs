using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Teniszpalya.API.Data;
using Teniszpalya.API.Models;

namespace Teniszpalya.API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly AppDBContext _context;

        public UsersController(AppDBContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpGet]
        public async Task<IActionResult> GetUsers()
        {
            var roleClaim = User.FindFirst(ClaimTypes.Role)?.Value;

            if(!Enum.TryParse<Role>(roleClaim, out var role) || role != Role.ADMIN)
            {
                return Forbid();
            }

            var users = await _context.Users.ToListAsync();
            return Ok(users);
        }

        [Authorize]
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id)
        {
            var userID = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;

            if (userID == null || userID != id.ToString())
            {
                return Forbid();
            }

            User? user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }
            else
            {
                return Ok(user);
            }
        }

        [Authorize]
        [HttpGet("me")]
        public async Task<IActionResult> GetCurrentUser()
        {
            var userID = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var user = await _context.Users.FindAsync(int.Parse(userID));
            return Ok(new { user.ID, user.FirstName, user.LastName, user.Email, user.PhoneNumber });
        }

        [Authorize]
        [HttpPut("edit")]
        public async Task<IActionResult> EditProfile(ProfileDTO profileDTO)
        {
            var userID = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            var user = await _context.Users.FindAsync(int.Parse(userID));

            if (user == null) return NotFound();

            user.FirstName = profileDTO.FirstName;
            user.LastName = profileDTO.LastName;
            user.Email = profileDTO.Email;
            user.PhoneNumber = profileDTO.PhoneNumber;

            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}