using BackendApp.DTO;
using BackendApp.Model;
using BackendApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

namespace BackendApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IngredientController : ControllerBase
    {
        private readonly IIngredientService _ingredientService;

        public IngredientController(IIngredientService ingredientService)
        {
            _ingredientService = ingredientService;
        }
        [Authorize]
        [HttpGet]
        public async Task<ActionResult<List<ExistingIngredient>>> GetIngredients()
        {
            var result = await _ingredientService.GetExistingIngredients();
            return Ok(result);
        }
        [Authorize(Roles = Roles.Admin)]
        [HttpPost]
        public async Task<ActionResult<ExistingIngredient>> AddIngredient(ExistingIngredientDTO ingredientDTO)
        {
            var result = await _ingredientService.CreateExistingIngredient(ingredientDTO);
            return Ok(result);
        }
        [Authorize(Roles = Roles.Admin)]
        [HttpDelete]
        public async Task<ActionResult<bool>> DeleteIngredient(int id)
        {
            var result = await _ingredientService.DeleteExistingIngredient(id);
            return Ok(result);
        }
    }
}
