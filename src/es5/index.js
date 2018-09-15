const people = [
  {
    name: 'John',
    age: 18
  },
  {
    name: 'Prabhu',
    age: 30
  },
  {
    name: 'Nitesh',
    age: 25
  },
  {
    name: 'Rocky',
    age: 30
  },
  {
    name: 'Manoj',
    age: 40
  }
];

// const newPeople = [];

// It doesnt return
// for (let index = 0; index < people.length; index++) {
//   const element = people[index];
//   console.log('element: ', element);
//   element.age = element.age + 10;
//   // newPeople.push(element);
// }

// console.log('newPeople: ', newPeople);

// // Use case for Map - > To always return a new ARRAY [size will be same]
// const newPeople = people.map(function(element) {
//   console.log('element: ', element);
//   element.age = element.age + 10;
//   return element;
// });

// // newPeople -> array of same size as people
// console.log('newPeople: ', newPeople);

// Use case for Filter - > To always return a new Filtered ARRAY [size will be different]
// const newPeople = people.filter(function(element) {
//   console.log('element: ', element);

//   return element.age > 25;
// });

// const newPeople = people.filter(element => element.age > 25);

// console.log('newPeople: ', newPeople);

// Doesn't return anything - Generally for printing or just itterating
const newPeople = people.forEach(function(element) {
  console.log('element: ', element);
});

console.log('newPeople: ', newPeople);
