using Catalog.Api.Models;
using Catalog.Api.Services;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace Catalog.Api.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MostPopularMoviesController : ControllerBase
    {
        private readonly MostPopularMoviesService _movieService;

        public MostPopularMoviesController(MostPopularMoviesService movieService)
        {
            _movieService = movieService;
        }

        [HttpGet("popular")]
        public async Task<IActionResult> GetPopularMovies() 
        { 
            var response = await _movieService.PopularMoviesService();

            if (response.IsSuccessStatusCode)
            {
                var readMovies = await response.Content.ReadAsStringAsync();
                var mostPopularMovies = JsonConvert.DeserializeObject<MostPopularMovies.Rootobject>(readMovies);


                return Ok(mostPopularMovies);
            }

            return StatusCode((int)response.StatusCode);
        }
    }
}
