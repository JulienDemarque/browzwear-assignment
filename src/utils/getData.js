import { getUniqueList, getUniqueListWithKeyword } from "./avoidDuplicate";

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
  const unsortedCitiesList = getUniqueListWithKeyword(
    citiesFullList,
    "cityName"
  );

  // Get the list of companies
  const companiesFullList = Customers.map(customer => ({
    companyName: customer.CompanyName,
    fromCity: customer.City
  }));
  // Remove duplicates
  const unsortedCompaniesList = getUniqueListWithKeyword(
    companiesFullList,
    "companyName"
  );

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
    const numberOfCompaniesInCityA = unsortedCompaniesList.filter(company => {
      return company.fromCity === cityA.cityName;
    }).length;
    const numberOfCompaniesInCityB = unsortedCompaniesList.filter(
      company => company.fromCity === cityB.cityName
    ).length;
    return numberOfCompaniesInCityB - numberOfCompaniesInCityA;
  });

  // Sort the list of companies
  const companiesList = unsortedCompaniesList.sort((companyA, companyB) => {
    const nameA = companyA.companyName.toUpperCase(); // ignore upper and lowercase
    const nameB = companyB.companyName.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });

  // Find default data
  const firstCountry = countriesList[0];
  const firstCity = citiesList.filter(city => {
    return city.fromCountry === firstCountry;
  })[0].cityName;
  const firstCompany = companiesList.filter(company => {
    return company.fromCity === firstCity;
  })[0].companyName;

  return {
    countriesList,
    citiesList,
    companiesList,
    firstCountry,
    firstCity,
    firstCompany
  };
}
