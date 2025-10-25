using Microsoft.AspNetCore.Mvc;

namespace TravelAwayServices.Controllers
{
    /// <summary>
    /// API Information Controller - Provides basic API information and health checks
    /// </summary>
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class ApiInfoController : ControllerBase
    {
        /// <summary>
        /// Gets the API version and basic information
        /// </summary>
        /// <returns>API information object</returns>
        /// <response code="200">Returns API information</response>
        [HttpGet("info")]
        [ProducesResponseType(typeof(object), 200)]
        public IActionResult GetApiInfo()
        {
            var apiInfo = new
            {
                Name = "MyTravel API",
                Version = "1.0.0",
                Description = "Travel booking and management API",
                Status = "Running",
                Timestamp = DateTime.UtcNow
            };

            return Ok(apiInfo);
        }

        /// <summary>
        /// Health check endpoint
        /// </summary>
        /// <returns>Health status</returns>
        /// <response code="200">API is healthy</response>
        [HttpGet("health")]
        [ProducesResponseType(typeof(object), 200)]
        public IActionResult HealthCheck()
        {
            return Ok(new { Status = "Healthy", Timestamp = DateTime.UtcNow });
        }
    }
}