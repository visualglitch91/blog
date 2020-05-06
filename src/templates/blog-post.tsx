import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import { rhythm, scale } from "../utils/typography"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/card"

const Title = styled.h1({
  marginTop: rhythm(1),
  marginBottom: 0,
})

const PublishedAt = styled.p({
  ...scale(-1 / 5),
  display: `block`,
  marginBottom: rhythm(1),
})

const Separator = styled.hr({
  marginBottom: rhythm(1),
})

function BlogPostTemplate({ data, location }) {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Card>
        <article>
          <header>
            <Title>{post.frontmatter.title}</Title>
            <PublishedAt>{post.frontmatter.date}</PublishedAt>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <Separator />
          <footer>
            <Bio />
          </footer>
        </article>
      </Card>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY", locale: "pt-BR")
        description
      }
    }
  }
`
