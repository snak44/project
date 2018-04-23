import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './02-About'
import About from './App'
import Topics from './03-Topics'

export default class extends React.Component{
    render() {
        return(
            <Router>
                <div className="Pages" >




                    <h1>Naks Store</h1>


                    <Link to="/">Home</Link>               <Link to="/1">Product</Link>                  <Link to="/2">Store</Link>




                    <Route exact path="/" component={Home}/>
                    <Route path="/1" component={About}/>
                    <Route path="/2" component={Topics}/>


                </div>
            </Router>
        )
    }
}



