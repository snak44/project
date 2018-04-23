import React, { Component } from 'react';
import './App.css';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {  graphql} from 'react-apollo'
import ListProducts from './Queries/ListProducts'
import Sauce from "./img/sauce.png"
import {Button} from 'reactstrap';
import Dic from "./img/dic.png"
import Garlic2 from "./img/garlic2.png"
import Mush from "./img/mush.png"

const sauce = {
    id: 1,
    price: 1,
    name: "sauce",
};

const garlic = {
    id: 1,
    price: 1,
    name: "Garlic"
};
const mushroom = {
    id: 1,
    price: 1,
    name: "Mushroom"
};



let cart = [];
const addToCart=(Product) =>  {
    cart = [... cart, Product,];
    console.log(cart)
};
const removeAll = () => {
    cart = [];
    console.log(cart)

};



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
      <div className="pages">

          {this.props.products.map((product) => {
              console.log('HERE: ', product)
              return <div key={product.id}>

                  <h3>{product.name}</h3>
                  <img src={require('./img/' + product.imgName)} alt=""/>
                  <Button onClick={e=>addToCart(product)}  color="secondary" size="sm">Add to cart
                  </Button>
                  <h2>{product.size}</h2>
                  <h1>${product.price}</h1>
                  <h4>Details</h4>
                  <p>{product.details}</p>
                  <h4>ingredients</h4>
                  <p>{product.ingredients}</p>
                  <img src={require('./img/' + product.ingredientsImg)} alt=""/>



              </div>

          })}









          <div>

          </div>
          <div>

          </div>

          <h3>Warnings</h3>
          <p> May contains an occasional olive pit or fragment. Sealed for your protection.</p>


          <h4>Directions</h4>
          <p>For best results refrigerate after opening.</p>

          <h1>You may also like</h1>
          <hr />
          <h3>(Chef Naks Garlic Mash!) </h3>
          <img className="Garlic2" src={Garlic2} alt={Garlic2}/><br />
          <div className="button2">
              <Button onClick={e=>addToCart(garlic)}color="secondary" size="sm">Add to cart
              </Button>

          </div>
          <div>
              <h3>(Chef Naks Mushroom Mash!)</h3>
              <img className="Mush" src={Mush} alt={Mush}/> <br />
              <Button onClick={e=>addToCart(mushroom)} color="secondary" size="sm">Add to cart
              </Button>
              <Button onClick={e=>removeAll(1)} color="secondary" size="sm">Remove all
              </Button>

          </div>






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
            products: props.data.listSauces ?  props.data.listSauces.items : []
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
