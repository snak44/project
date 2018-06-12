import React, { Fragment } from 'react'
import { Consumer } from './Context'
import { Form, FormGroup, Label, Input,  } from 'reactstrap';
import {Elements} from 'react-stripe-elements';
import  CheckoutForm from './CheckoutForm'
import Cart from '../img/cart.png'



export default () => (
  <Fragment>
    <Consumer>
      {({ cart, totalItems, totalPrice }) => {

        const currentCart = cart()
        const items = totalItems()
        const price = totalPrice()

        return (
          <Fragment>
            <img className="cart" src={Cart} alt={Cart}/>
            {currentCart.map((c, index) => (
              <Fragment key={index}>
                <h3>{c.name}</h3>
              </Fragment>
            ))}

            <div className="Items"> Total Items: {items}</div>
            <div className="Price"> Total Price: {price}</div>
            <div>
              <div>

                <Elements>
                  <CheckoutForm/>

              </Elements>
              </div>
            </div>
          </Fragment>
        )
      }}
    </Consumer>

  </Fragment>
)