import React from "react";
import Pic from "../img/pic.png"

class Page extends React.Component{
    render() {
        return(
            <div className="Pages2">
                <h1> Chef Naks Sauce store!</h1>
                <img className="Pic" src={Pic} alt={Pic}/>
            </div>
        )
    }
}

export default Page;
