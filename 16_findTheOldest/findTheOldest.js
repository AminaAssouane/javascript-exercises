const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();
  return people.reduce((oldest, current) => {
    let ageOldest;
    let ageCurrent;
    if ("yearOfDeath" in oldest)
      ageOldest = oldest.yearOfDeath - oldest.yearOfBirth;
    else ageOldest = currentYear - oldest.yearOfBirth;
    if ("yearOfDeath" in current)
      ageCurrent = current.yearOfDeath - current.yearOfBirth;
    else ageCurrent = currentYear - current.yearOfBirth;

    if (ageOldest < ageCurrent) return current;
    else return oldest;
  }, people[0]);
};

// Do not edit below this line
module.exports = findTheOldest;
