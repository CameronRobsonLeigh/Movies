namespace Catalog.Api.Services
{
    public class MostPopularMoviesService
    {
        private readonly HttpClient _httpClient;
        private readonly IConfiguration _configuration;
        private readonly string ?_baseAddress;
        private readonly string ?_bearerAuthentication;

        public MostPopularMoviesService(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _configuration = configuration;

            _baseAddress = _configuration.GetValue<string>("DiscoverMovieApi");
            _bearerAuthentication = _configuration.GetValue<string>("BearerAuthentication");

            _httpClient.BaseAddress = new Uri(_baseAddress);
            _httpClient.DefaultRequestHeaders.Add("accept", "application/json");
            _httpClient.DefaultRequestHeaders.Add("Authorization", _bearerAuthentication);
        }

        public async Task<HttpResponseMessage> PopularMoviesService()
        {
            var requestUri = $"?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&Authorization";
            var response = await _httpClient.GetAsync(requestUri);
            return response;
        }
    }
}
