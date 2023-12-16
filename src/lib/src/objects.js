const createPerson = (name, age) => {
  return {name, age};
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return !!object[property];
};

const isOver65 = person => {
  return person.age>65;
};

const getAges = people => {
  const array = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < people.length; i++) {
    array.push(people[i].age);
  }
  return array;
}

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  if (people.length === 0) {
    return 0;
  }
  const totalAge = people.reduce((sum, person) => sum + person.age, 0);
  const averageAge = totalAge / people.length;
  return averageAge;
}

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce(person) {
      return `Hi ${person}, my name is ${this.name} and I am ${this.age}!`
    }
  }
};
module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
