import React from 'react'

export default function Header({title}) {
    return (
        <div className="row" >
           <div className="col text-center display-4 mt-2 mb-3">
               {title}              
           </div>
            
        </div>
    )
}
