import React, { Fragment } from 'react'
import { Consumer } from '../Cart/Context'
import Sauce from "../img/sauce.png"
import {Link} from 'react-router-dom'




export default () => {
    return (
        <Consumer>
            { ({ addToCart }) => {
                return (
                   <div className="pig">
                    <Fragment>
                        <h1>Chef nak's italian spread</h1>
                      <div className="pig2">
                        <img src={Sauce} alt={Sauce} className="Sauce"/>
                   </div>
                        <button onClick={ e => addToCart({ name: 'Chef naks italian spread', price: 5.99 }) }>
                            <Link className="myLink" to="/3">Add To Cart</Link>
                            <h1>Details</h1>
                            <p>A blend of garlic, mushrooms, peppers, and alot of other stuff!</p>
                            <h1>Size</h1>
                            <p>10.2.Cl.OZ</p>
                            <h1>Price</h1>
                           <div className="red3">
                            <p>$5.99</p>
                   </div>
                        </button>




                    </Fragment>
                    </div>
                )
            } }

        </Consumer>
    )
}
