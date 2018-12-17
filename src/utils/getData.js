import {
  getUniqueList,
  getUniqueListCities,
  getUniqueListCompanies
} from "./avoidDuplicate";

export function getData({ Customers }) {
  // Get the list of countries
  const countriesFullList = Customers.map(customer => customer.Country);
  // Remove duplicates
  const unsortedCountriesList = getUniqueList(countriesFullList);

  // Get the list of cities
  const citiesFullList = Customers.map(customer => ({
    cityName: customer.City,
    fromCountry: customer.Country
  }));
  // Remove duplicates
  const unsortedCitiesList = getUniqueListCities(citiesFullList);

  // Get the list of companies
  const companiesFullList = Customers.map(customer => ({
    companyName: customer.CompanyName,
    fromCity: customer.City
  }));
  // Remove duplicates
  const companiesList = getUniqueListCompanies(companiesFullList);

  // Sort the list of countries
  const countriesList = unsortedCountriesList.sort((countryA, countryB) => {
    const numberOfCitiesInCountryA = unsortedCitiesList.filter(
      city => city.fromCountry === countryA
    ).length;

    const numberOfCitiesInCountryB = unsortedCitiesList.filter(
      city => city.fromCountry === countryB
    ).length;
    return numberOfCitiesInCountryB - numberOfCitiesInCountryA;
  });

  // Sort the list of cities
  const citiesList = unsortedCitiesList.sort((cityA, cityB) => {
    const numberOfCompaniesInCityA = companiesList.filter(company => {
      return company.fromCity === cityA.cityName;
    }).length;
    const numberOfCompaniesInCityB = companiesList.filter(
      company => company.fromCity === cityB.cityName
    ).length;
    return numberOfCompaniesInCityB - numberOfCompaniesInCityA;
  });

  return { countriesList, citiesList, companiesList };
}
