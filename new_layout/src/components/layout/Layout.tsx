import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import './reset.css'
import Header from "@components/header"
import { makeStyles, Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontFamily: theme.typography.fontFamily,
  }
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header  siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main className={classes.root}>{children}</main>
        <footer
            style={{
              marginTop: `2rem`,
            }}
          >
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
