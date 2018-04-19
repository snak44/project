import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {  graphql} from 'react-apollo'
import ListProducts from './Queries/ListProducts'
import CreateProduct from './Mutations/CreateProduct'
import uuidV4 from 'uuid/v4'

class App extends Component {
    // // state = {
    // //     name: '',
    // //     ingredient: '',
    // //     direction: '',
    // //     ingredients:[],
    // //     directions: [],
    //
    // };
    // onChange = (key,value) => {
    //     this.setState({ [key]: value})
    // };
    // addIngredient = () => {
    //     if (this.state.ingredient === '') return;
    //     const ingredients = this.state.ingredients;
    //     ingredients.push(this.state.ingredient);
    //     this.setState({
    //         ingredient:''
    //     })
    // };
    // addDirection = () => {
    //     if (this.state. direction === '') return;
    //     const  directions = this.state. directions;
    //     directions.push(this.state. direction);
    //     this.setState({
    //         direction:''
    //     })
    // };
    // addProduct = () => {
    //    const { name, ingredients, directions} = this.state
    //     this.props.onAdd({
    //         name,
    //         ingredients,
    //         directions,
    //         id: uuidV4()
    //     })
    //     this.setState({
    //         name: '',
    //         ingredient: '',
    //         direction: '',
    //     })
    // }
  render() {
      console.log('props:', this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          {/*{*/}
              {/*this.props.products.map((products, index) => (*/}
                  {/*<div key={index}>*/}
                      {/*<p>{products.name}</p>*/}
                  {/*</div>*/}
              {/*))*/}
          {/*}*/}
      </div>
    );
  }
}

// const styles = {
//     input: {
//     height:50,
//     width:300,
//         borderBottom: '2px solid blue'
//
//     }
// }

export default graphql
    (ListProducts, ({
        options:{
            fetchPolicy: "cache-and-network"
        },
        props: props => ({
            products: props.data.listProducts ?  props.data.listProducts.items : []
        })
    }))
    // graphql(CreateProduct, {
    //    props: props => ({
    //        onAdd: product => props.mutate({
    //            variables: product
    //        })
    //    })
    // })
(App)
