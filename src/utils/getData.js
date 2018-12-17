import {
  getUniqueList,
  getUniqueListCities,
  getUniqueListCompanies
} from "./avoidDuplicate";

export function getData(data) {
  //DO NOT FORGET TO SORT THESE ARRAYS!!!!!!!!!!!!
  const countriesFullList = data.Customers.map(customer => customer.Country);
  const countriesList = getUniqueList(countriesFullList);

  //DO NOT FORGET TO SORT THESE ARRAYS!!!!!!!!!!!!
  const citiesFullList = data.Customers.map(customer => ({
    cityName: customer.City,
    fromCountry: customer.Country
  }));
  const citiesList = getUniqueListCities(citiesFullList);

  //DO NOT FORGET TO SORT THESE ARRAYS!!!!!!!!!!!!
  const companiesFullList = data.Customers.map(customer => ({
    companyName: customer.CompanyName,
    fromCity: customer.City
  }));
  const companiesList = getUniqueListCompanies(companiesFullList);

  return { countriesList, citiesList, companiesList };
}
