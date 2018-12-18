// General helper functions
export function getUniqueList(list) {
  var seen = {};
  return list.filter(function(item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
}

export function getUniqueListWithKeyword(list, keySearch) {
  var seen = {};
  return list.filter(function(item) {
    return seen.hasOwnProperty(item[keySearch])
      ? false
      : (seen[item[keySearch]] = true);
  });
}
