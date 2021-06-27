import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/reusable/HeroSection"
import Infoblock from "../components/reusable/Infoblock";
import Dualinfoblock from "../components/reusable/Dualinfoblock";



const ServicesPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
     <HeroSection
      // img={data.image.childImageSharp.fluid}
      title="Services"
      subtitle=""
      heroStyle="about"
     />
     <Infoblock heading="Services"/>
     <Dualinfoblock heading="Information"/>
     
   
  </Layout>
)

export const query=graphql`
{
  image: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid_tracedSVG
          
        }
      }
    }
}

`


export default ServicesPage
