import React, { Component } from 'react'
import {Link} from 'gatsby';
import logo from "../../images/logo.jpg" 

export default class Navbar extends Component {
  state={
    navbar: false,
    navbarClass: "collapse navbar-collapse",
    menus:[
      {
        id:1,
        text:"Home",
        url:"/"

      },{
        id:2,
        text:"Products",
        url:"/products"


      },{
        id:3,
         text:"About",
          url:"/about"
      },{
        id:4,
        text:"Contact",
        url:"/contact"

      }
    ]
  }
  myToddler=()=>{
  
      this.state.Navbar ? this.setState(
        {
          navbar: false,
          navbarClass: "collapse navbar-collapse"
        }
      ):this.setState({
        navbar: true,
        navbarClass: "collapse navbar-collapse show"
      })
    

    
  }
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-dark text-white">
             
            <Link to="/" className="navbar-brand ml-5">
              <img src={logo} alt="logo goes here" width="40px"/> 
            </Link>
            <button className="navbar-toggler" onClick={this.myToddler} type="button">
              <span className="text-white">menu</span>
            </button>
            <div className={this.state.navbarClass} >
             <ul className="navbar-nav ml-auto mr-5">
              {
                this.state.menus.map(menu=>{
                  return(
                 <li key={menu.id} className="nav-item">
                    <Link to={menu.url} className="nav-link text-white">
                       {menu.text}
                    </Link>                
                 
                 </li>)


                })
              }             

             </ul>
            </div>    
                
            </nav>
        )
    }
}
