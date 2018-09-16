// Packages
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Product.scss';

class Product extends Component {
  // this is bind [already] to class/component
  state = {
    discountPercentage: '20%'
  };

  // Only Once
  constructor(props) {
    super(props);
    console.log('constructor called');
    // state = {
    //   discountPercentage: '20%'
    // };

    // this.setState({
    //   discountPercentage: '20%'
    // });

    // console.log('this: ', this);
    // // Initial State
    // this.state = {
    //   discountPercentage: '20%'
    // };
  }

  // Only Once
  componentWillMount() {
    console.log('componentWillMount');
  }

  // Only once
  componentDidMount() {
    console.log('componentDidMount called');

    // setTimeout(() => {
    //   this.setState({
    //     discountPercentage: '40%'
    //   });
    // }, 2000);
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps: ', nextProps);
    console.log('componentWillReceiveProps: called ', this);
    // If you want to change ur state based on props - use this method
    if (nextProps.productPrice < 200) {
      this.setState({
        discountPercentage: '10%'
      });
    }
  }

  // In General - we dnt use
  shouldComponentUpdate(nextProps, nextState) {
    // console.log('nextState: ', nextState);
    // console.log('nextProps: ', nextProps);
    // return true;
    if (
      nextProps.productName !== this.props.productName ||
      nextProps.productPrice !== this.props.productPrice
    ) {
      return true;
    } else {
      return false;
    }
  }

  componentWillUpdate() {
    console.log('componentWillUpdate called');
  }

  // Render gets called - whenever u change any props or state
  render() {
    console.log('render called');
    const { productName, productPrice } = this.props;
    const { discountPercentage } = this.state;
    // return new Error('Some rnaomd erro');

    return (
      <div className="Product">
        <div className="card">
          <img
            className="card-img-top"
            src="https://via.placeholder.com/350x150"
            alt="Card image cap"
          />
          <div className="card-body">
            <h5 className="card-title">{productName}</h5>
            <div className="card-text">
              <p>Price : {productPrice}</p>
              <p>Discount : {discountPercentage}</p>
            </div>
            {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
