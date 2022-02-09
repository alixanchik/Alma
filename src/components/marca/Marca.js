import React from 'react'
import "../marca/Marca.css"
import aenti from "../../img/Rectangle (1).png"
// import oscar from "./marca.img/jscar.png"
// import united from "./marca.img/united.png"
// import oxford from "./marca.img/oscar.png"
// import optum from "./marca.img/optum.png"
// import yarvard from "./marca.img/harvard.png"
function Marca() {
    return (
        <div>
            <div className='marca-menu'>
                <h1>
                Find therapists at Alma in<br></br> network with:
                </h1>
                <img src={aenti}/>
            </div>
        </div>
    )
}

export default Marca