// All Var are assesible -> Function scoped

// const & let -> Block Scoped {}

// Const - read only
// let - re-assign the value

let personName = 'John';
const age = 15;

personName = 'Rokcy';

console.log('personName: ', personName);

if (age === 18) {
  let isValidVoter = 'Yes, It is a valid user';
  console.log('isValidVoter: ', isValidVoter);
}
