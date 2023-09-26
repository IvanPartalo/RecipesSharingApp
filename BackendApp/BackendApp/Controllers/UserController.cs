using BackendApp.DTO;
using BackendApp.Model;
using BackendApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackendApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IUserService _userService;
        public UserController(IUserService userService)
        {
            _userService = userService;
        }
        [Route("allcooks")]
        [Authorize(Roles =Roles.Admin)]
        [HttpGet]
        public async Task<ActionResult<List<CookDTO>>> GetCooks()
        {
            var result = await _userService.GetAllCooks();
            return Ok(result);
        }
        [Route("cooks")]
        [Authorize(Roles = Roles.Admin)]
        [HttpGet]
        public async Task<ActionResult<Cook>> GetCookByUsername(string username)
        {
            var result = await _userService.GetCookByUsername(username);
            if(result == null)
            {
                return StatusCode(StatusCodes.Status404NotFound);
            }
            return Ok(result);
        }
    }
}
