import React from "react";
import Shop1 from '../img/shop1.png'
class Page extends React.Component{
    render() {
        return(
            <div className="Pages2">
             <div className="name">
              <h1>Nak Sauce</h1>
             </div>
              <img className="Shop1" alt={Shop1} src={Shop1}/>
            </div>
        )
    }
}

export default Page;
