import { useEffect, useState } from "react"
import background from '../img/room-background.png'
import math from '../img/math-puzzle.png'
// import img from '../img/opening-photo.png'
// import img from '../img/opening-photo.png'


const TheRoom = () => {


    return (
        <div className="the-room">
            <img className="room-background" src={background}></img>
            <img className="abs math" src={math}></img>


        </div>
    )
}

export default TheRoom