import React from 'react'
import Header from "../reusable/Header"
import {Link} from "gatsby"

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme mt-4 mb-4">
         <div className="container ">
            <Header title={heading}/>
           <div className="row ">
             <div className="col-10 text-center text-white mx-auto">
              
             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde repudiandae expedita magnam ipsum omnis illum eum quia eveniet at odit vel nemo magni illo placeat nesciunt, numquam molestias dolores explicabo nulla quis beatae! Consequatur necessitatibus, quis ipsa repudiandae mollitia quidem molestias, quia amet repellendus culpa fugiat enim a officia dolor?</p>
             <Link to="/About">
              <button type="button" className="btn btn-warning btn-lg my-0 text-center mx-auto pl-4 pr-4 mb-3 mt-3">
                  {heading}                 
              </button>
           </Link>
             
             </div>
           </div>
           
         </div>
            
        </section>
    )
}
