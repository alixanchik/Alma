import React from 'react'
import t from "./Marca.module.css"
import aenti from "../../img/Rectangle (1).png"
 import oscar from "../../img/Rectangle (2).png"
 import united from "../../img/Rectangle (3).png"
 import oxford from "../../img/Rectangle (4).png"
 import optum from "../../img/Rectangle (5).png"
 import yarvard from "../../img/Rectangle (6).png"
function Marca() {
    return (
        <div>
            <div className={`${t}.marca-menu`}>
                <h1>
                Find therapists at Alma in<br></br> network with:
                </h1>
                <img src={aenti}/>
                <img src={oscar}/>
                <img src={united}/>
                <img src={oxford}/>
                <img src={optum}/>
                <img src={yarvard}/>
            </div>
        </div>
    )
}

export default Marca