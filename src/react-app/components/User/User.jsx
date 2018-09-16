import React from 'react';

export default class User extends React.Component {
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
