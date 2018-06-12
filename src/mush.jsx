import React, { Fragment } from 'react'
import { Consumer } from './Cart/Context'
import {Link} from 'react-router-dom'
import Mush from './img/mush.png'
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button} from 'reactstrap';





export default () => {
    return (
        <Consumer>
            { ({ addToCart }) => {
                return (
                    <div className="Chicken">
                        <Fragment>


                                    <div>

                            <h1>Chef Nak's Mushroom mash</h1>


                            </div>

                               <div className="Chicken4">
                                  <Card>
                                   <CardBody>
                                    <h2>Details</h2>
                                    <p>A blend all sorts of Mushroom spreads!</p>
                                   </CardBody>
                                  </Card>
                               </div>


                            <div className="Chicken2">
                                <img src={Mush} alt={Mush} className="mush"/>
                            </div>
                            <button onClick={ e => addToCart({ name: 'Chef naks Mushroom Mash', price: 7.99 }) }>
                                <Link className="myLink" to="/4">Add To Cart</Link>
                                <h1>Size</h1>
                                <p>24.fl.OZ</p>
                                <h1>Price</h1>
                              <div className="red2">
                              <p>$7.99</p>
                              </div>
                                <div>
                                    <Card>
                                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle>Card title</CardTitle>
                                            <CardSubtitle>Card subtitle</CardSubtitle>
                                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                            <Button>Button</Button>
                                        </CardBody>
                                    </Card>
                                </div>

                            </button>




                        </Fragment>
                    </div>
                )
            } }

        </Consumer>
    )
}
