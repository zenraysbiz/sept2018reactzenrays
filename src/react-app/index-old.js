// console.log('Hello from React entry file');

const targetEl = document.getElementById('user-name');
// targetEl.innerHTML = 'John';
// targetEl.innerHTML = 'Rocky';

import React from 'react';
import ReactDOM from 'react-dom';

// const myElement = React.createElement('span', { className: 'username' }, 'Prabhu');
// const myElement = React.createElement(
//   'div',
//   null,
//   React.createElement('p', { class: 'welcome-msg' }, 'Welcome to class'),
//   React.createElement('span', null, 'user : Prabhu')
// );

// Using JSX [No Function]
const myElement = (
  <div>
    <p class="welcome-msg">Welcome to class</p>
    <span>user : Prabhu</span>
  </div>
);
// ReactDOM.render(myElement, targetEl);

// Pure Function - stateless component [Return JSX]
// const Component1 = ({ name, age }) => {
//   return (
//     <div>
//       <p>Name: {name}</p>
//       <p>Age: {age}</p>
//     </div>
//   );
// };

// ReactDOM.render(<Component1 name="John" age="25" />, targetEl);

// React Class syntax using RENDER method
class Component2 extends React.Component {
  render() {
    const { name, age } = this.props;
    console.log('this.props: ', this.props);
    return (
      <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    );
  }
}

ReactDOM.render(<Component2 name="John" age="25" />, targetEl);
