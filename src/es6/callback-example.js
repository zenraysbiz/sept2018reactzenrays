function getPersonDetails(personId, callback, callback2) {
  setTimeout(() => {
    const people = {
      100: {
        name: 'John',
        age: 20
      },
      200: {
        name: 'Nitesh',
        age: 25
      },
      300: {
        name: 'Prabhu',
        age: 30
      }
    };

    // return people[personId];

    // Run the callback
    callback(people[personId], callback2);
  }, 1000);
}

// const res = getPersonDetails(300);
// console.log('res: ', res);

function printEnhanceResult(data) {
  data.phoneNumber = '12345';
  console.log('data: ', data);
}

function printEnhanceAge(data) {
  data.age = data.age + 50;
  console.log('data: ', data);
}

function printResult(person, callback2) {
  console.log('person: ', person);

  // This is hard coded
  callback2(person);
}

getPersonDetails(100, printResult, printEnhanceResult);
