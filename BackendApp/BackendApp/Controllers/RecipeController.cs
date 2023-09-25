﻿using BackendApp.DTO;
using BackendApp.Model;
using BackendApp.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace BackendApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RecipeController : ControllerBase
    {
        private readonly IRecipeService _recipeService;
        public RecipeController(IRecipeService recipeService)
        {
            _recipeService = recipeService;
        }
        [HttpGet]
        public async Task<ActionResult<List<Recipe>>> GetRecipes()
        {
            var result = await _recipeService.GetAll();
            return Ok(result);
        }
        [Authorize(Roles = Roles.Cook)]
        [HttpPost]
        public ActionResult AddRecipe(RecipeDTO recipe)
        {
            _recipeService.AddRecipe(User.Identity.Name, recipe);
            return Ok();
        }
        [Authorize(Roles = Roles.Cook)]
        [HttpDelete]
        public async Task<ActionResult> RemoveRecipe(int id)
        {
            var result = await _recipeService.RemoveRecipe(User.Identity.Name, id);
            if (!result)
            {
                return Unauthorized();
            }
            return Ok();
        }
    }
}