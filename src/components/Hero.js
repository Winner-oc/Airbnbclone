import React from "react"
import grid from "../images/photo-grid.png"

export default function Hero() {
    return(
        <div className="Hero-container">
            <div className="grid-container">
               <img className="grid-photo" src={grid} alt=""/>
            </div>
            <div className="Hero-texts">
                <h1>Online Experiences</h1>
                <h4>Join unique interactive activities led by 
                    <br/>
                    one-of-a-kind hosts-all without leaving 
                    <br/>
                    home.</h4>
            </div>
        </div>
    )
}