import { useEffect, useState } from "react"
import SigninForm from "../components/SigninFrom";
import background from '../img/room-background.png'
import math from '../img/math-puzzle.png'
import Home from "./Home";
import { useNavigate } from "react-router-dom";


const Math = () => {

    let navigate = useNavigate();

    const theroom = () => {
        let path = '/theroom'
        navigate(path)
    }

    return (
        <div className="background-div">
            <img className="room-background" src={background}></img>
            <img className="abs" src={math}></img>
            <input className="math-input"></input>
            <button className="back-button" onClick={theroom}>Give up</button>
        </div>
    )
}

export default Math