﻿using BackendApp.DTO;
using BackendApp.Model;

namespace BackendApp.Services
{
    public interface IRecipeService
    {
        public Task<List<RecipeOutputDTO>> GetAll();
        public void AddRecipe(string cookName, RecipeDTO recipeDTO);
        public Task<bool> RemoveRecipe(string username, int id);
        public Task<bool> RemoveRecipeByAdmin(int recipeId);
        public Task<List<RecipeOutputDTO>> GetSearchedRecipes(SearchDTO searchDTO);
    }
}
