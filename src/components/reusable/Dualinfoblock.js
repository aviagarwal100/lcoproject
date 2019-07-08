import React from 'react'
import {Link} from "gatsby"



export default function Dualinfoblock({heading}) {
    return (

        <section className="bg-theme mb-4">
            <div className="container text-center">
                 <h3 className="display-4 mb-4 mt-4 pt-3">{heading}</h3>
                <div className="row">
                        <div className="col-8">
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, amet delectus inventore unde sunt temporibus minima eveniet sapiente molestias accusamus, tenetur neque deserunt? Cumque incidunt debitis et numquam quidem dolore temporibus non maiores suscipit culpa excepturi illum eaque magni nostrum repellat dolores quam iste sapiente tenetur optio, dolor odio iure itaque rerum! Officia assumenda voluptatum saepe sapiente necessitatibus ullam, minus magni sint inventore iste doloribus molestias. Fugit, debitis optio. Mollitia culpa totam eveniet autem sit optio officiis minima ut, sed labore a non commodi beatae odit itaque voluptatum iure repudiandae inventore distinctio accusamus dolorum eius? Inventore eum soluta consectetur corporis?</p>
                        </div>
                        <div className="col-4">
                                <div className="card mb-4">
                                    <img src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" class="card-img-top" alt="imag goes here"/>
                                    <div className="card-body bg-dark">
                                        <h5 className="card-title text-success">Lorem ipsum dolor sit amet.</h5>
                                        <p className="card-text text-white">
                                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, iure! Lorem ipsum dolor sit amet.
                                        </p>
                                        <Link to="/">
                                          <button className="btn btn-warning btn-block">
                                          {heading}
                                          </button>
                                        </Link>
                                        
                                    </div>
                                </div>
                            
                                    
                        
                        </div>
                </div>
                </div>
            
        </section>
    )
}
