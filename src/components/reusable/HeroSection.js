import React from 'react'
import BackGroundImages from "gatsby-background-image"

export default function HeroSection({img,title,subtitle,heroStyle}) {
    return (
        <BackGroundImages
           className={heroStyle} fluid={img}
        >
            <h1 className="text-white text-uppercase text-center display-4">{title}</h1>
            <div>
              <h4 className="text-warning">{subtitle}</h4>
            </div>        
            
        </BackGroundImages>
    )
}
