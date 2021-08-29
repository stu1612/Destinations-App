import * as React from "react"
import Header from "./Header"
import Footer from "./Footer"
import { GlobalStyle } from "./styles/GlobalStyles"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query siteInfo {
      site {
        siteMetadata {
          author
          copyright
          title
          siteUrl
        }
      }
    }
  `)

  const { author, copyright, title, siteUrl } = data.site.siteMetadata

  return (
    <>
      <GlobalStyle />
      <Header title={title} />
      <main>{children}</main>
      <Footer copyright={copyright} author={author} url={siteUrl} />
    </>
  )
}

export default Layout
