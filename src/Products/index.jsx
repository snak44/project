import React, { Fragment } from 'react'
import { Consumer } from '../Cart/Context'

export default () => {
    return (
    <Consumer>
    { ({ addToCart }) => {
        return (
            <Fragment>
           <h1>Chef nak's italian spread</h1>
            <button onClick={ e => addToCart({ name: 'Sauce', price: 5.99 }) }>Add to Cart</button>

        </Fragment>
    )
    } }

</Consumer>
)
}