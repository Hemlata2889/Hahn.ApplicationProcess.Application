using Hahn.ApplicationProcess.December2020.Data.DBModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;


namespace Hahn.ApplicationProcess.December2020.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicantsController : ControllerBase
    {
        private ApplicationDbContext _context;
        private ILogger<ApplicantsController> _logger;
        public ApplicantsController(ApplicationDbContext context, ILogger<ApplicantsController> logger)
        {
            _context = context;
            _logger = logger;
            _logger.LogInformation("Writing to log file with INFORMATION severity level.");
            _logger.LogDebug("Writing to log file with DEBUG severity level.");
            _logger.LogWarning("Writing to log file with WARNING severity level.");
            _logger.LogError("Writing to log file with ERROR severity level.");
            _logger.LogCritical("Writing to log file with CRITICAL severity level.");
        }

        [HttpGet("GetData")]
        public IEnumerable<ApplicantModel> GetApplicantDetails()
        {
            _logger.LogInformation("Read data for all applicants");
            return _context.ApplicantModels;
        }

        [HttpGet("GetDataById/{Id}")]
        public IActionResult GetApplicantDetails(int Id)
        {
            try
            {
                _logger.LogInformation("Reading data for Applicant Id" + Id);
                ApplicantModel applicantModel = null;
                if (Id != 0)
                {
                    applicantModel = _context.ApplicantModels.FirstOrDefault(i => i.ID == Id);
                    _logger.LogInformation("Reading data for Applicant Id " + Id + " is successful");
                }


                return new JsonResult(applicantModel);
            }
            catch (Exception ex)
            {
                _logger.LogError("Error Occurred: " + ex.Message + ":" + ex.StackTrace);
                return new JsonResult(StatusCode(StatusCodes.Status400BadRequest));
            }
        }

        [HttpPost("AddData")]
        public IActionResult Post([FromBody] ApplicantModel applicantModel)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(ModelState);

                _logger.LogInformation("Inserting data for Applicant");
                if (applicantModel == null)
                    return BadRequest(ModelState);

                _context.ApplicantModels.Add(applicantModel);
                _context.SaveChanges();

                _logger.LogInformation("Inserting data for Applicant is successful");
                return new JsonResult(StatusCode(StatusCodes.Status201Created));
            }
            catch (Exception ex)
            {
                _logger.LogError("Error Occurred: " + ex.Message + ":" + ex.StackTrace);
                return BadRequest(ModelState);
            }
        }

        [HttpPut("{Id}")]
        public IActionResult UpdateApplicantDetailsByID(int Id, [FromBody] ApplicantModel applicant)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest();

                _logger.LogInformation("Updating data for Applicant");
                if (applicant == null || Id == 0)
                    return StatusCode(StatusCodes.Status400BadRequest);

                var details = _context.ApplicantModels.FirstOrDefault(i => i.ID == Id);
                if (details == null)
                    return StatusCode(StatusCodes.Status404NotFound);

                details.Name = applicant.Name;
                details.FamilyName = applicant.FamilyName;
                details.EmailAddress = applicant.EmailAddress;
                details.Age = applicant.Age;
                details.Address = applicant.Address;
                details.CountryOfOrigin = applicant.CountryOfOrigin;
                details.Hired = applicant.Hired;

                _context.ApplicantModels.Update(details);
                _context.SaveChanges();
                _logger.LogInformation("Updating data for Applicant is successful");
                return new JsonResult(StatusCode(StatusCodes.Status200OK));
            }
            catch (Exception ex)
            {
                _logger.LogError("Error Occurred: " + ex.Message + ":" + ex.StackTrace);
                return new JsonResult(StatusCode(StatusCodes.Status400BadRequest));
            }
        }

        [HttpDelete("{Id}")]
        public IActionResult DeleteApplicantDetailsByID(int Id)
        {
            try
            {
                _logger.LogInformation("Deleting data for Applicant Id" + Id);
                var details = _context.ApplicantModels.FirstOrDefault(i => i.ID == Id);
                if (details == null)
                    return StatusCode(StatusCodes.Status404NotFound);

                _context.ApplicantModels.Remove(details);
                _context.SaveChanges();
                _logger.LogInformation("Deleting data for Applicant Id" + Id + "is successful");
                return new JsonResult(StatusCode(StatusCodes.Status200OK));

            }
            catch (Exception ex)
            {
                _logger.LogError("Error Occurred: " + ex.Message + ":" + ex.StackTrace);
                return new JsonResult(StatusCode(StatusCodes.Status400BadRequest));
            }
        }


    }
}
