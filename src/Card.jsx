import { useState } from "react"
import "./CSS/card.css"

export default function Card(){

    const [num,setNum]=useState(0);

    return(
    <div className="card">
        <p>{num}</p>
        <button onClick={()=>setNum(num+1)}>add</button>
        <button onClick={()=>setNum(0)}>reset</button>
    </div>
    )
}

//? my code ^-^