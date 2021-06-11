import * as React from "react"
import './reset.css'
import Header from "@components/header"
import Footer from "@components/footer"
import { makeStyles, Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    '& a': {
      textDecoration: 'none',
      color: theme.palette.primary.contrastText
    }
  }
}))

const Layout = (props: LayoutProps) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
        <Header />
          <main>{props.children}</main>
        <Footer/>
    </div>
  )
}

interface LayoutProps {
  children: React.ReactNode
}

export default Layout
