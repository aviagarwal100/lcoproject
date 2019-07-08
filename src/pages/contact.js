import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/reusable/HeroSection"
import Infoblock from "../components/reusable/Infoblock";
import Dualinfoblock from "../components/reusable/Dualinfoblock";
import Contact from "../components/Contact/Contact";



const ContactPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
     <HeroSection
     img={data.image.childImageSharp.fluid}
      title="Contacts"
      subtitle=""
      heroStyle="about"
     />
     <Infoblock heading="Contact Details"/>
     <Dualinfoblock heading="Our Team"/>
     <Contact/>
     
   
  </Layout>
)

export const query=graphql`
{
  image: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
          
        }
      }
    }
}

`


export default ContactPage
