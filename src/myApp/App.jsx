import React, { Component } from 'react';
import './App.css';
import {CartProvider} from '../Cart/Context'


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {  graphql} from 'react-apollo'
import ListProducts from '../Queries/ListProducts'
import Sauce from "../img/sauce.png"
import {Button} from 'reactstrap';
import Dic from "../img/dic.png"
import Garlic2 from "../img/garlic2.png"
import Mush from "../img/mush.png"
import Food2 from "../img/food2.png"
import Food from "../img/food.png"
import Food1 from "../img/food1.png"

import { Consumer } from '../Cart/Context'












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
      <Consumer>
        {({ addToCart }) => {

          return (
            <div className="me">

              {this.props.products.map((product) => {
                console.log('HERE: ', product);
                return <div key={product.id}>
                    <div className="name">
                  <h3>{product.name}</h3>
                    </div>
                  <img src={require('../img/' + product.imgName)} alt=""/>
                  <button onClick={e => addToCart(product)}>Add to Cart</button>
                  {/*<button>*/}
                    {/*<Link className="myLink" to="/4">Add To Cart</Link>*/}
                  {/*</button>*/}

                  <h2>{product.size}</h2>


                  <div className="red">
                  <h1>${product.price}</h1>
                  </div>

                  <h4>Details</h4>
                  <p>{product.details}</p>
                  <h4>ingredients</h4>
                  <p>{product.ingredients}</p>






                  <img src={require('../img/' + product.ingredientsImg)} alt=""/>



                </div>


              })}



              <div>
                <h3>WOW!!</h3>
                <img className="Food2" src={Food2} alt={Food2}/>

              </div>





              <div>
    <h3> Ewwww Garlic!</h3>
    <img className="food" alt={Food} src={Food}/>
</div>




                <div>
                    <h3>Mushrooms</h3>
                    <img className="food1" src={Food1} alt={Food1}/>

                </div>





              <div>

              </div>






              <h3>Warnings</h3>
              <p> May contains an occasional olive pit or fragment. Sealed for your protection.</p>


              <h4>Directions</h4>
              <p>For best results refrigerate after opening.</p>







            </div>
          )

        }}



      </Consumer>
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
