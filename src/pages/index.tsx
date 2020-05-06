// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, primaryColor, secondaryColor } from "../utils/typography"

const Article = styled.article`
  background: white;
  border-top: 16px solid ${secondaryColor};
  padding: 30px;
  transition: border 200ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  box-shadow: 0px 0px 11px -3px rgba(50, 50, 50, 0.4);

  &:hover {
    border-color: ${primaryColor};
    h3 {
      color: ${primaryColor};
    }
  }

  h3 {
    color: ${secondaryColor};
    margin: 0 0 0.4375rem;
    transition: color 200ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }

  section p:last-child {
    margin-bottom: 0;
  }
`

type Data = {
  site: {
    siteMetadata: {
      title: string
    }
  }
  allMarkdownRemark: {
    edges: {
      node: {
        excerpt: string
        frontmatter: {
          title: string
          date: string
          description: string
        }
        fields: {
          slug: string
        }
      }
    }[]
  }
}

const BlogIndex = ({ data, location }: PageProps<Data>) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Todos os artigos" />
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.fields.slug

        return (
          <Link to={node.fields.slug} style={{ color: "inherit" }}>
            <Article key={node.fields.slug}>
              <header>
                <h3>{title}</h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </section>
            </Article>
          </Link>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY", locale: "pt-BR")
            title
            description
          }
        }
      }
    }
  }
`
