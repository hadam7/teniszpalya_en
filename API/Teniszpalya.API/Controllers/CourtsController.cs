using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Teniszpalya.API.Data;
using Teniszpalya.API.Models;

namespace Teniszpalya.API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class CourtsController : ControllerBase
    {
        private readonly AppDBContext _context;

        public CourtsController(AppDBContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetCourts()
        {
            var courts = await _context.Courts.ToListAsync();
            return Ok(courts);
        }
    }
}