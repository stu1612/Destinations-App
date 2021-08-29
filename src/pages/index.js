import * as React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Trips } from "../components/Trips"

const IndexPage = ({ description, hero_title }) => (
  <Layout>
    <Seo title="Home" />
    <Hero description={description} hero_title={hero_title} />
    <Trips />
  </Layout>
)

export default IndexPage
