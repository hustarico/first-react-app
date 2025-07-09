import { useState } from "react"
import "./CSS/card.css"

export default function Card(){

    const [num,setNum]=useState(0);

    function increase(){
        setNum(n=>n+1);
    }
    function reset(){
        setNum(0);
    }


    return<div className="card">
        <p>{num}</p>
        <button onClick={increase}>add</button>
        <button onClick={reset}>reset</button>
    </div>
}

//? my code ^-^