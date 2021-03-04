import * as React from "react"
import SEO from "../components/seo"
import { WebsiteLayout } from "@templates"
import SplashScreen from "../components/splashScreen/SplashScreen"

const IndexPage = () => (
  <WebsiteLayout>
    <SEO title="Home" />
    <SplashScreen />
  </WebsiteLayout>
)

export default IndexPage
