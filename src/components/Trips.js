import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"

export const Trips = () => {
  return (
    <div>
      <ProductsContainer>
        <ProductsHeading>Headings</ProductsHeading>
        <ProductWrapper>Wrapper</ProductWrapper>
      </ProductsContainer>
    </div>
  )
}

const ProductsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: red;
  color: #fff;
`

const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin: 5rem;
  color: #000;
`

const ProductWrapper = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin: 5rem;
  color: #000;
`
