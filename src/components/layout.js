import React from "react"
import { Link } from "gatsby"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import { rhythm, scale } from "../utils/typography"
import logoSrc from "./logo.png"
import logoSmallSrc from "./logo-small.png"

const LargeHeading = styled.h1({
  ...scale(1.5),
  marginBottom: rhythm(1.5),
  marginTop: 0,
  textAlign: "center",
  a: {
    boxShadow: `none`,
    color: `inherit`,
  },
})

const SmallHeading = styled.h3({
  textAlign: "center",
  marginTop: 0,
  a: {
    boxShadow: `none`,
    color: `inherit`,
  },
})

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isHome = location.pathname === rootPath
  const Heading = isHome ? LargeHeading : SmallHeading

  return (
    <>
      {isHome && (
        <Global
          styles={css`
            body {
              background-image: linear-gradient(to top right, #ff71ce, #01cdfe);
              background-attachment: fixed;
            }
          `}
        />
      )}
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(28),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header>
          <Heading>
            <Link to={`/`}>
              <img src={isHome ? logoSrc : logoSmallSrc} alt={title} />
            </Link>
          </Heading>
        </header>
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
