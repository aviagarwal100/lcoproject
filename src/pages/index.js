import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/reusable/HeroSection"
import Infoblock from "../components/reusable/Infoblock";
import Dualinfoblock from "../components/reusable/Dualinfoblock";
import Cartcourse from "../components/Cart/Cartcourse"



const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
     <HeroSection
     img={data.image.childImageSharp.fluid}
      title="I write code"
      subtitle="learn code online"
      heroStyle="hero"
     />
     <Infoblock heading="About"/>
     <Cartcourse courses={data.courses}/>
     <Dualinfoblock heading="Our Team"/>
     
   
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
    courses:allContentfulCourse{
      edges{
        node{
          id
          title
          price
          category
          image{
            fluid{
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description{
            description
          }
          
        }
      }
    }
    
}

`


export default IndexPage