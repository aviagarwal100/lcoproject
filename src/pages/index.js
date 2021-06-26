import React from "react"


import Layout from "../components/layout"

import SEO from "../components/seo"
import HeroSection from "../components/reusable/HeroSection"
import Infoblock from "../components/reusable/Infoblock";
import Dualinfoblock from "../components/reusable/Dualinfoblock";



const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
     <HeroSection
     
      title="I write code"
      subtitle="learn code online"
      heroStyle="hero"
     />
     <Infoblock heading="About"/>     
     <Dualinfoblock heading="Our Team"/>
     
   
  </Layout>
)



      
        
      
    
    





export default IndexPage
