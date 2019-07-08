import React from 'react'
import Header from "../reusable/Header"

export default function Contact() {
    return (
        <section className="bg-theme  text-center">
        <Header title="How may we help you?"/>
        <form action="https://formspree.io/aviagarwal100@gmail.com" method="POST">
          <div className="container text-center px-4 py-4">
           <div className="row ">
              <div className="col-10 text-center px-5">
              <h5>Your name:  <input  length="20" type="text" name="name" placeholder="Your Name" className="ml-5"/></h5>
              <br/><br/>
              <h5>Your email:  <input  length="20" type="email" name="email" placeholder="Your Email" className="ml-5"/></h5>
              <br/><br/>
              <h5><span className="mr-4">Your message: </span> <textarea  length="60"  type="text" name="description" placeholder="Message" className="ml-3"/></h5>
              
              <br/><br/>
              <button className="btn btn-success text-center">Submit</button>
              <br/><br/>

              </div>
           </div>
           </div>
           </form>
            
        </section>
    )
}
