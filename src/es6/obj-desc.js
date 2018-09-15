const person = {
  name: 'John',
  age: 25,
  address: {
    city: 'Bangalore',
    area: {
      zipCode: 560001
    }
  },
  phoneNumber: 99999
};

// const name = person.name;
// console.log('name: ', name);

// const zipCode = person.address.area.zipCode;
// console.log('zipCode: ', zipCode);

const {
  name: userName,
  address: {
    city,
    area: { zipCode }
  },
  phoneNumber = '1234567890'
} = person;

console.log('name: ', name);
console.log('userName: ', userName);
console.log('city: ', city);
console.log('zipCode: ', zipCode);
console.log('phoneNumber: ', phoneNumber);
