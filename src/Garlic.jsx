import React, { Fragment } from 'react'
import { Consumer } from './Cart/Context'
import Scott from "./img/scott1.png"





export default () => {
    return (
        <Consumer>
            { ({ addToCart }) => {
                return (
                    <div className="cow">
                        <Fragment>
                            <div className="cow2">
                            <img className="Scott1" alt={Scott} src={Scott}/>
                               <div className="aboutus">
                                 <h1>About Us</h1>
                                <h6>We are Sterling and Scott, two chile heads on a mission to share flavorful sauces with the world. Our passion to discover is to make the most unique sauces out there. We believe in making the best product possible..
                                  </h6>
                            </div>
                            </div>





                        </Fragment>
                    </div>
                )
            } }

        </Consumer>
    )
}
