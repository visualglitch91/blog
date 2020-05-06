import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { rhythm } from "../utils/typography"
import GlobalCSS from "./global-css"
import logoSrc from "./logo.png"
import headSrc from "./head.png"

const Center = styled.div`
  text-align: center;
`

const ImageLink = styled.a`
  box-shadow: none;
  font-size: 0;
`

function Layout({ location, title, children }) {
  return (
    <>
      <GlobalCSS />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(28),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <Center>
          <ImageLink as={Link} to="/">
            <img src={logoSrc} alt="visualglitch91" width="400px" />
          </ImageLink>
        </Center>
        <main>{children}</main>
        <Center>
          <ImageLink href="https://twitter.com/visualglitch91" target="_blank">
            <img src={headSrc} alt="" height="200px" />
          </ImageLink>
        </Center>
      </div>
    </>
  )
}

export default Layout
