import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import Card from "../components/card"
import { primaryColor } from "../utils/typography"

const Wrapper = styled(Link)`
  display: block;
  margin-bottom: 2rem;

  ${Card} {
    border-color: #cfdde1;
    color: gray;
    transition: border 200ms linear, color 200ms linear;
  }

  &,
  &:hover {
    box-shadow: 0px 0px 11px -3px rgba(50, 50, 50, 0.4);
  }

  &:hover ${Card} {
    color: black;
    border-color: ${primaryColor};
  }

  h3 {
    margin: 0;
  }

  section p:last-child {
    margin-bottom: 0;
  }
`

function PostCard({ node }) {
  const title = node.frontmatter.title || node.fields.slug

  return (
    <Wrapper to={node.fields.slug}>
      <Card>
        <article>
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
        </article>
      </Card>
    </Wrapper>
  )
}

export default PostCard
