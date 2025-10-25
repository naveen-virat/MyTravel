using Microsoft.AspNetCore.Mvc;
using MyTravelDAL.Models;
using TravelAwayDAL;
using System.ComponentModel.DataAnnotations;



namespace TravelAwayServices.Controllers
{
    /// <summary>
    /// Travel Away API Controller - Handles all travel booking and management operations
    /// </summary>
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Produces("application/json")]
    public class TravelAwayController : Controller
    {
        TravelAwayRepository repository;
        public TravelAwayController()
        {
            repository = new TravelAwayDAL.TravelAwayRepository();
        }

        /// <summary>
        /// Validates customer login credentials
        /// </summary>
        /// <param name="emailId">Customer email address</param>
        /// <param name="password">Customer password</param>
        /// <returns>Returns customer role ID on successful login, -99 on error</returns>
        /// <response code="200">Returns the customer role ID</response>
        /// <response code="400">If login fails or invalid credentials</response>
        [HttpGet]
        [ProducesResponseType(typeof(int), 200)]
        [ProducesResponseType(400)]
        public int ValidateLoginCustomer([Required] string emailId, [Required] string password)
        {
            int role;
            //string emailId = cust.EmailId;
            //string password = cust.UserPassword;
            try
            {
                role = repository.ValidateLoginCustomer(emailId, password);
            }
            catch (Exception)
            {
                role = -99;
            }
            return role;
        }

        /// <summary>
        /// Validates employee login credentials
        /// </summary>
        /// <param name="emailId">Employee email address</param>
        /// <param name="password">Employee password</param>
        /// <returns>Returns employee role ID on successful login, -99 on error</returns>
        [HttpGet]
        [ProducesResponseType(typeof(int), 200)]
        [ProducesResponseType(400)]
        public JsonResult ValidateLoginEmployee([Required] string emailId, [Required] string password)
        {
            int role;
            try
            {
                role = repository.EmployeeLogin(emailId,password);
            }
            catch (Exception)
            {
                role = -99;
            }
            return Json(role);
        }

        /// <summary>
        /// Retrieves all available travel packages
        /// </summary>
        /// <returns>List of all travel packages</returns>
        /// <response code="200">Returns the list of packages</response>
        /// <response code="500">If there was an internal server error</response>
        [HttpGet]
        [ProducesResponseType(typeof(List<Package>), 200)]
        [ProducesResponseType(500)]
        public JsonResult GetPackages()
        {
            List<Package> packageList;
            try
            {
                packageList = repository.GetPackages();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                packageList = null;
            }
            return Json(packageList);
        }

        [HttpGet]
        public JsonResult GetCustomerDetails(string emailId)
        {
            Customer customer;
            try
            {
                customer = repository.GetCustomerById(emailId);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                customer = null;
            }
            return Json(customer);
        }

        // API to get a list of all package categories
        [HttpGet]
        public JsonResult GetPackageCategories()
        {
            List<PackageCategory> packageCategoriesList;
            try
            {
                packageCategoriesList = repository.GetPackageCategories();
            }
            catch (Exception)
            {
                packageCategoriesList = null;
            }
            return Json(packageCategoriesList);
        }

        // API to get a list of package filtered by categoryId
        [HttpGet]
        public JsonResult GetPackagesByCategoryId(int categoryId)
        {
            List<Package> packageList;
            try
            {
                packageList = repository.GetPackageByCategoryId(categoryId);
            }
            catch (Exception)
            {
                packageList = null;
            }
            return Json(packageList);
        }

        // API to get package details for given packageId
        [HttpGet]
        public JsonResult GetPackageDetailsByPackageId(string packageId)
        {
            List<PackageDetail> packageDetails;
            try
            {
                int Id = Convert.ToInt32(packageId);
                packageDetails = repository.GetPackageDetailsByPackageId(Id);
            }
            catch (Exception)
            {
                packageDetails = null;
            }
            return Json(packageDetails);
        }

        // API to get details of user given emailId
        [HttpGet]
        public JsonResult GetCustomerByEmail(string emailId)
        {
            Customer cust;
            try
            {
                cust = repository.GetCustomerById(emailId);
            }
            catch (Exception)
            {
                cust = null;
            }
            return Json(cust);
        }

        // API to get accommodation details given bookingId
        [HttpGet]
        public JsonResult GetAccomodationByBookingId(string bookingId)
        {
            Accomodation accObj;
            try
            {
                int Id = Convert.ToInt32(bookingId);
                accObj = repository.GetAccomodationByBookingId(Id);
            }
            catch (Exception)
            {
                accObj = null;
            }
            return Json(accObj);
        }

        // API to get a random employeeId
        [HttpGet]
        public int GetAssignee()
        {
            int empId;
            try
            {
                empId = repository.GetAssigne();
            }
            catch (Exception)
            {
                empId = -99;
            }
            return empId;
        }

        // API to get an arithmetic set of all hotel ratings for a city 
        [HttpGet]
        public JsonResult GetHotelRatingsByCity(string city)
        {
            List<int> ratings;
            try
            {
                ratings = repository.GetHotelRatingByCity(city);
            }
            catch (Exception)
            {
                ratings = null;
            }
            return Json(ratings);
        }

        // API to get a list of hotels given city and rating
        [HttpGet]
        public JsonResult GetHotelsByCityAndRating(string city, string rating)
        {
            List<string> hotels;
            try
            {
                int val = Convert.ToInt32(rating);
                hotels = repository.GetHotelsByCityAndRating(city, val);
            }
            catch (Exception)
            {
                hotels = null;
            }
            return Json(hotels);

        }

        [HttpGet]
        public int GetHotelCost(string hotelName, string roomtype)
        {
            int cost;
            try
            {

                cost = repository.GetHotelCost(hotelName, roomtype);
            }
            catch (Exception)
            {
                cost = 0;
            }
            return cost;

        }

        [HttpGet]
        public int GetTotal(string bookingId)
        {
            int total;
            try
            {
                int bkid = Convert.ToInt32(bookingId);
                total = repository.TotalAmount(bkid);
            }
            catch (Exception)
            {
                total = 0;
            }
            return total;

        }

        [HttpGet]
        public JsonResult ViewBookedPackages(string email)
        {
            List<ViewBookings> bookings;
            try
            {

                bookings = repository.ViewBookedPackages(email);
            }
            catch (Exception)
            {
                bookings = null;
            }
            return Json(bookings);

        }


        [HttpGet]
        public JsonResult GetHotels()
        {
            List<Hotel> hotels;
            try
            {

                hotels = repository.GetHotels();
            }
            catch (Exception)
            {
                hotels = null;
            }
            return Json(hotels);

        }

        [HttpGet]
        public JsonResult GetVehicles()
        {
            List<Vehicle> vehicles;
            try
            {

                vehicles = repository.GetVehicles();
            }
            catch (Exception)
            {
                vehicles = null;
            }
            return Json(vehicles);

        }

        // API to get city given packageDetailsId
        [HttpGet]
        public JsonResult GetCityByPackageDetailsId(string bookingId)
        {
            string city;
            try
            {
                int pkgDetId = Convert.ToInt32(bookingId);
                city = repository.GetCitiesByPackageDetailsId(pkgDetId);
            }
            catch (Exception)
            {
                city = null;
            }
            return Json(city);
        }


        #region - CREATE
        // API to register a user
        // Return 1 indicates success
        //       -98 indicates invalid details
        //       -99 indicates an exception
        [HttpPost]
        public int AddCustomer(Customer custObj)
        {
            int role;
            try
            {
                role = repository.RegisterNewCustomer(custObj);
            }
            catch (Exception)
            {
                role = -99;
            }
            return role;
        }

        // API to add accomodation details for customer
        [HttpPost]
        public bool AddAccomodationDetails(Accomodation accObj)
        {
            bool status;
            try
            {
                status = repository.AddAccomodation(accObj);
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }

        // API to add bookPackage details for customer
        [HttpPost]
        public int AddBookPackage(BookPackage bkPkg)
        {
            int bookingId;
            try
            {
                bookingId = repository.BookPackageBySP(bkPkg);
            }
            catch (Exception)
            {
                bookingId = 0;
            }
            return bookingId;
        }

        // API to add a hotel by Admin
        [HttpPost]
        public bool AddHotel(Hotel hotel)
        {
            bool status;
            try
            {
                status = repository.AddNewHotel(hotel);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
                status = false;
            }
            return status;
        }

        // API to add a vehivle by Admin
        [HttpPost]
        public bool AddVehicle(Vehicle vehicle)
        {
            bool status;
            try
            {
                status = repository.AddNewVehicle(vehicle);
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }

        // API to add a customer care entry
        [HttpPost]
        public bool AddCustomerCare(CustomerCare custCare)
        {
            bool status;
            try
            {
                status = repository.AddCustomerCare(custCare);
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }



        [HttpPost]
        public bool Payment(Payment pay)
        {
            bool status;
            try
            {
                status = repository.AddPayment(pay);
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }


        #endregion

        #region - UPDATE
        // API to update user details
        [HttpPut]
        public bool UpdateProfile(Customer custObj)
        {
            bool status;
            try
            {
                status = repository.EditProfile(custObj);
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }
        #endregion

        #region - DELETE
        #endregion
    }

}
