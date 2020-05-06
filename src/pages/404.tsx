import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Card from "../components/card"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IframeWrapper = styled.div`
  font-size: 0;
  margin: -30px;

  iframe {
    width: 100%;
    height: 400px;
    margin: 0;

    @media (max-width: 600px) {
      height: 320px;
    }

    @media (max-width: 400px) {
      height: 220px;
    }
  }
`

function NotFoundPage({ data, location }) {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle} head={false}>
      <SEO title="404" />
      <Card>
        <IframeWrapper>
          <iframe
            src="https://www.youtube.com/embed/bAgmGZ9iQ2Y"
            frameBorder="0"
            allowFullscreen
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </IframeWrapper>
      </Card>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
