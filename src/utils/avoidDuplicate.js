// General helper function
export function getUniqueList(list) {
  var seen = {};
  return list.filter(function(item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}

//WE CAN REFACTOR THESE 2 HELPERS INTO  1 BY PASSING THE KEY NAME
// Custom helper function to accomodate citiesFullList data structure
export function getUniqueListCities(list) {
  var seen = {};
  return list.filter(function({ cityName }) {
    return seen.hasOwnProperty(cityName) ? false : (seen[cityName] = true);
  });
}

// Custom helper function to accomodate companiesFullList data structure
export function getUniqueListCompanies(list) {
  var seen = {};
  return list.filter(function({ companyName }) {
    return seen.hasOwnProperty(companyName)
      ? false
      : (seen[companyName] = true);
  });
}
