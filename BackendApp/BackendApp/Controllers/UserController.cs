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
        [Route("currentcook")]
        [Authorize(Roles = Roles.Cook)]
        [HttpGet]
        public async Task<ActionResult<Cook>> GetLogedInCookInfo()
        {
            var result = await _userService.GetCookByUsername(User.Identity.Name);
            if (result == null)
            {
                return StatusCode(StatusCodes.Status404NotFound);
            }
            return Ok(result);
        }
        [Route("bookmark")]
        [Authorize(Roles = Roles.User)]
        [HttpPost]
        public async Task<ActionResult> BookmarkRecipe(int recipeId)
        {
            var result = await _userService.BookmarkRecipe(User.Identity.Name, recipeId);
            if (!result)
            {
                return BadRequest();
            }
            return Ok();
        }
        [Route("bookmark")]
        [Authorize(Roles = Roles.User)]
        [HttpGet]
        public async Task<ActionResult<List<Recipe>>> GetBookmarkedRecipes()
        {
            var result = await _userService.getBookmarkedRecipes(User.Identity.Name);
            return Ok(result);
        }
    }
}
