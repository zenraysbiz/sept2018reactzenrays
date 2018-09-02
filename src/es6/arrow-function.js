// function welcomeUser() {
//   // setTimeout(() => {
//   // This code will be executed after 2000 ms - 2second
//   const welcomeMessage = `Hello ${this.userName} staying in ${this.city} and age is ${this.age}`;
//   console.log('welcomeMessage: ', welcomeMessage);
//   // }, 2000);
// }

// Fat arrow function - we cant not pass the This Reference
const welcomeUser = () => {
  // setTimeout(() => {
  // This code will be executed after 2000 ms - 2second
  const welcomeMessage = `Hello ${this.userName} staying in ${this.city} and age is ${this.age}`;
  console.log('welcomeMessage: ', welcomeMessage);
  // }, 2000);
};

const person1 = {
  userName: 'John',
  age: 18,
  city: 'Bangalore',
  welcomeUser: function() {
    setTimeout(function() {
      // This code will be executed after 2000 ms - 2second
      const welcomeMessage = `Hello ${this.userName} staying in ${this.city} and age is ${
        this.age
      }`;
      console.log('welcomeMessage: ', welcomeMessage);
    }, 2000);
  }
};

person1.welcomeUser();

const person2 = {
  userName: 'Rocky',
  age: 25,
  city: 'Delhi'
};

// console.log('person: ', person);

// welcomeUser.bind(person1)();
// welcomeUser.bind(person2)();

// function simpleFunction(param1,param2) {
//   console.log('params: ', param1);
// }

// simpleFunction('John');

// const myNewFn = param => {
//   console.log('param: ', param);
// };

// myNewFn('Rocky');
