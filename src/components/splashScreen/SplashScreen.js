import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GridFluidContainer } from "@layouts"
import { ImageQL } from "@images"
import { useViewportInfo } from "@hooks"

const SplashScreen = () => {
  const { height } = useViewportInfo()
  const data = useStaticQuery(graphql`
    query SplashScreenImage {
      laptop: allFile(filter: { sourceInstanceName: { eq: "splashScreen" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(breakpoints: [1920], quality: 100)
            }
          }
        }
      }
      tablet: allFile(filter: { sourceInstanceName: { eq: "splashScreen" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(breakpoints: [1024], quality: 100)
            }
          }
        }
      }
      mobile: allFile(filter: { sourceInstanceName: { eq: "splashScreen" } }) {
        edges {
          node {
            relativePath
            childImageSharp {
              gatsbyImageData(breakpoints: [375], quality: 100)
            }
          }
        }
      }
    }
  `)

  return (
    <GridFluidContainer>
      <ImageQL data={data} alt="Mulher em posiçao facil" />
    </GridFluidContainer>
  )
}

export default SplashScreen
