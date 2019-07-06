import React, { Component } from 'react'
import Header from "../reusable/Header"
import Img from "gatsby-image"
import {Link} from "gatsby"

export default class Cartcourse extends Component {
    constructor(props){
        super(props)
        this.state={
            course:props.courses.edges,
            mycourse:props.courses.edges,

        }
    }
    render() {
        return (
            <section className="py-5 bg-theme">
              <div className="container">
               <Header title="Courses"/>
                <div className="row">
                    {
                        this.state.mycourse.map(({node})=>{
                           return(
                               <div key={node.id} className="col-4 px-2 py-2">
                               <div className="card">
                               <Img fluid={node.image.fluid} class="card-img-top" alt="imag goes here"/>
                               <div className="card-body bg-dark">
                                   <h5 className="card-title text-success">{node.title}</h5>
                                   <p className="card-text text-white">
                                      {node.description.description}
                                   </p>
                                   <p className="ard-text text-primary">
                                     ${node.price}
                                   </p>
                                   <Link to="/">
                                     <button 
                                        data-item-id={node.id}
                                        data-item-name={node.title}
                                        data-item-price={node.price}
                                        data-item-url=""
                                        data-item-image={node.image.fluid.src}
                                        className="btn btn-warning btn-block snipcart-add-item"
                                     >
                                     Join Now 
                                     </button>
                                   </Link>
                                   
                               </div>
                           </div>
                               </div>
                           )

                        })
                    }
                </div>
              </div>
                
            </section>
        )
    }
}
