function getPersonDetails(personId) {
  return new Promise((resolve, reject) => {
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

      const person = people[personId];
      if (person) {
        resolve(people[personId]);
      } else {
        reject('Hey, No such person found');
      }
    }, 0);
  });
}

const resPromise = getPersonDetails(300);
// console.log('res: ', res);
resPromise
  .then(function(data) {
    console.log('data: ', data);
    data.phoneNumber = 12345;
    return data;
  })
  .then(function(newData) {
    console.log('newData: ', newData);
  })
  .catch(function(err) {
    console.log('err: ', err);
  });

export const cityName = 'Bangalore';
