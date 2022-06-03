import React from "react"

import star1 from "../images/star.png"


export default function Card(props) {
    let badgeText 
    if (props.item.openSpots === 0){
       badgeText = "SOLD OUT"
    }else if (props.item.location === "Online"){
        badgeText= "ONLINE"
    }
    return(
        <div className="card">
            {badgeText && <div className="card-badge">{badgeText}</div>}
               <img  src={props.item.imageOne} alt="" className="card-image"/>
             <div className="card-stats">
                 <img className="card-star" src={star1}alt=""/>
                <span>{props.item.stats.ratings}</span>
                <span className="gray"> {props.item.stats.reviewCount} *</span>
                <span className="gray">{props.item.location}</span>
             </div>
             <p>{props.item.title}</p>
             <p><span className="bold">${props.item.price}</span>/person</p> 
        </div>
    )
}