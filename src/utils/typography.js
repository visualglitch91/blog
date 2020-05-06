import Typography from "typography"
import Wordpress2016 from "typography-theme-wordpress-2016"

const primaryColor = "#8e44ad"

Wordpress2016.overrideThemeStyles = () => {
  return {
    a: {
      color: primaryColor,
    },
    "mark,ins": {
      background: primaryColor,
    },
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale