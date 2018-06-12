import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './02-About'
import About from './App'
import Topics from './03-Topics'
import { CartProvider } from '../Cart/Context'
import Cart from '../Cart/index'
import Garlic from '../Garlic'
import Mush from '../mush'
import Card from '../card'
import Top from '../img/Top.png'
import Bot1 from '../img/Bot1.png'
import Shop1 from '../img/shop1.png'

export default class extends React.Component {
  render() {
    return (
      <CartProvider>
        <Router>
          <div className="Pages">

            <div className="james">
              <div className="james2">
                <img className="Bot1" src={Bot1} alt={Bot1}/>
                <div className="name">
                <h1>Nak Sauce</h1>
                </div>
                <img className="shop1" src={Shop1} alt={Shop1}/>
              </div>
              <Link to="/">Home</Link>| <Link to="/1">Product</Link>
              <Link to="/2"></Link> | <Link to="/3">Checkout</Link> | <Link to="/4">About Us</Link>
              <Link to="/5"></Link> <Link to="/6"></Link>
              <img className="Top" src={Top} alt={Top}/>

            </div>

            <Route exact path="/" component={Home}/>
            <Route path="/1" component={About}/>
            <Route path="/2" component={Topics}/>
            <Route path="/3" component={Cart}/>
            <Route path="/4" component={Garlic}/>
            <Route path="/5" component={Mush}/><
            Route path="/6" component={Card}/>
            <div className="see">

            </div>
          </div>
        </Router>
      </CartProvider>


    )
  }
}




