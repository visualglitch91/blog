import React from "react"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

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

const NavigationList = styled.ul({
  display: `flex`,
  flexWrap: `wrap`,
  justifyContent: `space-between`,
  listStyle: `none`,
  padding: 0,
})

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
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

      <nav>
        <NavigationList>
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </NavigationList>
      </nav>
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
