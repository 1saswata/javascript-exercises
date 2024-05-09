const findTheOldest = function(array) {
    let oldestPerson;
    function getAge(birthYear, deathYear) {
        deathYear = !deathYear? new Date().getFullYear() : deathYear;
        return deathYear - birthYear;
    }
    return array.reduce((oldestPerson, currentPerson)=>
                getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath) >
                getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath) ?
                oldestPerson : currentPerson);
};

// Do not edit below this line
module.exports = findTheOldest;
