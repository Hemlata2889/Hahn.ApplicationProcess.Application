using FluentValidation;
using Hahn.ApplicationProcess.December2020.Data.DBModels;
using System;
using System.Net.Http;

namespace Hahn.ApplicationProcess.December2020.Domain.Validator
{
    public class ApplicantValidator : AbstractValidator<ApplicantModel>
    {
        public ApplicantValidator()
        {
            RuleFor(x => x.Name).NotEmpty().MinimumLength(5);
            RuleFor(x => x.FamilyName).NotEmpty().MinimumLength(5);
            RuleFor(x => x.Address).NotEmpty().MinimumLength(10);
            RuleFor(x => x.EmailAddress).EmailAddress();
            RuleFor(x => x.Age).NotEmpty().InclusiveBetween(20, 60);
            RuleFor(x => x.Hired).NotNull();
            RuleFor(m => m.CountryOfOrigin).MustAsync(async (country, cancellation) => GetValidCountryAsync(country)).WithMessage("Country name is not valid.");
        }

        public bool GetValidCountryAsync(string countryName)
        {
            var client = new HttpClient();
            var request = new HttpRequestMessage
            {
                Method = HttpMethod.Get,
                RequestUri = new Uri("https://restcountries.eu/rest/v2/name/" + countryName + "?fullText=true"),
            };
            using (var response = client.SendAsync(request))
            {
                if (response.Result.StatusCode.ToString() == "OK")
                    return true;
                else
                    return false;
            }
        }
    }
}
