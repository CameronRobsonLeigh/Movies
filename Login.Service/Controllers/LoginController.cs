using Login.Service.Data;
using LoginService.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Login.Service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly UserServiceContext _context;

        public LoginController(UserServiceContext context)
        {
            _context = context;
        }

        [Route("/verifyUser")]
        [HttpPost]
        public async Task<ActionResult<User>> VerifyUser(User loginDetails)
        {
            var user = await _context.User.FirstOrDefaultAsync(u => u.Username == loginDetails.Username && u.Password == loginDetails.Password);

            if (user != null)
            {
                return Ok("User verified successfully.");
            }
            else
            {
                return BadRequest("Invalid username or password.");
            }
        }
    }
}
