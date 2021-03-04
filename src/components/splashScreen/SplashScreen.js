import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GridFluidContainer } from "@layouts"
import { ImageQL } from "@images"
import { useViewportInfo } from "@hooks"
import { colorsTheme } from "@theme"

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

  React.useEffect(() => {
    console.log("useEffect", height)
  })

  return (
    <GridFluidContainer height="945" bg={colorsTheme("blue")}>
      {/* <ImageQL data={data} alt="Mulher em posiçao facil" /> */}
    </GridFluidContainer>
  )
}

export default SplashScreen
