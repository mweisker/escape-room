import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import background from '../img/room-background.png'
import math from '../img/math-puzzle.png'
import detective from '../img/detective.png'
import map from '../img/map-puzzle.png'
import stone from '../img/stone-table-bare.png'
import news1 from '../img/news-crown.png'
import news2 from '../img/news-sphinx.png'
import news3 from '../img/news-vase.png'
import closet from '../img/closet-closed.png'
import { Navigate } from "react-router-dom"



const TheRoom = () => {
    const [crown, setCrown ] = useState(false)
    const [sphinx, setSphinx ] = useState(false)
    const [vase, setVase ] = useState(false)

    let navigate = useNavigate();

    const imageClick = (name) => {
        name(true)
    }

    const vanish = (name) => {
        name(false)
    }

    const route = (path) => {
        console.log(path)
        navigate(path)
    }


    return (
        <div className="background-div">
            <img className="room-background" src={background}></img>
            <img className="abs math" onClick={() => route('/math')} src={math}></img>
            <img className="abs detective" src={detective}></img>
            <img className="abs map" src={map}></img>
            <img className="abs stone" src={stone}></img>
            <img className="abs news1" onClick={() => imageClick(setCrown)} src={news1}></img>
            <img className="abs news2" onClick={() => imageClick(setSphinx)} src={news2}></img>
            <img className="abs news3" onClick={() => imageClick(setVase)} src={news3}></img>
            <img className="abs closet" src={closet}></img>

            <img className="abs news1-big" style={{'z-index':` ${crown ? '1' : '-1'}`}} onClick={() => vanish(setCrown)} src={news1}></img>
            <img className="abs news2-big" style={{'z-index':` ${sphinx ? '1' : '-1'}`}} onClick={() => vanish(setSphinx)} src={news2}></img>
            <img className="abs news3-big" style={{'z-index':` ${vase ? '1' : '-1'}`}} onClick={() => vanish(setVase)} src={news3}></img>



        </div>
    )
}

export default TheRoom