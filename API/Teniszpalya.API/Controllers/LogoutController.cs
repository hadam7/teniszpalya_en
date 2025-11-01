using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Teniszpalya.API.Controllers
{
    [ApiController]
    [Route("/api/[controller]")]
    public class LogoutController : ControllerBase
    {
        [Authorize]
        [HttpPost]
        public IActionResult Logout()
        {
            Response.Cookies.Append("AuthToken", "",
                new CookieOptions
                {
                    HttpOnly = true,
                    Secure = true,
                    SameSite = SameSiteMode.Strict,
                    Expires = DateTime.UtcNow.AddDays(-1)
                });

            return Ok(new { message = "Logged out" });
        }
    }
}