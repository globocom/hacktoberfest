import * as React from "react"
import './reset.css'
import Header from "@components/header"
import { makeStyles, Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontFamily: theme.typography.fontFamily,
  }
}))

const Layout = (props: LayoutProps) => {
  const classes = useStyles()

  return (
    <>
      <Header />
        <main className={classes.root}>{props.children}</main>
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

interface LayoutProps {
  children: React.ReactNode
}

export default Layout
