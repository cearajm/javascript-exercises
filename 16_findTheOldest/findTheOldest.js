

const findTheOldest = function(people) {

    const date = new Date().getFullYear();
    const oldest = people.reduce(
        (person, current) => {
            // return oldest of the two
            if ("yearOfDeath" in current === false) {
                current["age"] = date - current.yearOfBirth;
            } else {
                current["age"] = current.yearOfDeath - current.yearOfBirth;
            }
            if (person.age <= current.age) {
                return current;
            } return person;
        }, people[0],
    );
    console.log(oldest.name);
    return oldest;
};

const people = [
    {
    name: "Carly",
    yearOfBirth: 2018,
    },
    {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
    },
    {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
    },
]

let oldest = findTheOldest(people);
console.log("oldest: " + oldest);

// Do not edit below this line
module.exports = findTheOldest;
