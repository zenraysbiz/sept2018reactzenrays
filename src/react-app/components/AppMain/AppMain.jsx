// Packages
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Product from '../Product/Product.jsx';

class AppMain extends Component {
  state = {
    productList: [
      {
        productName: 'Pizza',
        productPrice: 100,
        color: 'red'
      }
    ]
  };

  // constructor(props) {
  //   super(props);
  //   this.sayHello = this.sayHello.bind(this);
  // }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({
    //     productList: [
    //       {
    //         productName: 'Burger',
    //         productPrice: 100
    //       }
    //     ]
    //   });
    // }, 2000);
  }

  // sayHello() {
  //   console.log('Hello from APpMain ', this);
  // }

  sayHello = () => {
    console.log('Hello from APpMain ', this);
    this.setState({
      productList: [
        // {
        //   productName: 'Burger',
        //   productPrice: 100,

        // }
        {
          productName: 'Pizza',
          productPrice: 500,
          color: 'green'
        }
      ]
    });
  };

  render() {
    const { productList } = this.state;
    console.log('this: ', this);
    return (
      <div className="AppMain">
        <h2>AppMain Component</h2>
        <main className="container">
          <div className="row">
            <div className="col-3">
              <Product
                productName={productList[0].productName}
                productPrice={productList[0].productPrice}
              />
            </div>
            {/* <div className="col-3">
              <Product productName="Pizza" productPrice="500" />
            </div>
            <div className="col-3">
              <Product productName="Pizza" productPrice="500" />
            </div>
            <div className="col-3">
              <Product productName="Pizza" productPrice="500" />
            </div> */}
          </div>
        </main>

        {/* <button className="btn btn-dark" onClick={this.sayHello.bind(this)}>
          Change Product List
        </button> */}

        <button className="btn btn-dark" onClick={this.sayHello}>
          Change Product List
        </button>
      </div>
    );
  }
}

AppMain.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  propName: PropTypes.object.isRequired
};

export default AppMain;
