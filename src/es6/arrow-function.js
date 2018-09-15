const person1 = {
  userName: 'John',
  age: 18,
  city: 'Bangalore',
  welcomeUser: function() {
    console.log('This inside person1 : ', this);

    // const _self = this;

    setTimeout(function() {
      console.log('This inside settimout : ', this);
      // This code will be executed after 2000 ms - 2second
      const welcomeMessage = `Hello ${this.userName} staying in ${this.city} and age is ${
        this.age
      }`;
      console.log('welcomeMessage: ', welcomeMessage);
    }, 2000);
  }
};

person1.welcomeUser();
