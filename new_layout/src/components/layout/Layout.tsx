import * as React from "react"
import './reset.css'
import {Header, HeaderTitle} from "@components/header"
import Footer from "@components/footer"
import { makeStyles, Theme } from "@material-ui/core"
import SEO from '@components/seo'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.default,
    fontFamily: theme.typography.fontFamily,
    "& a": {
      textDecoration: "none",
      color: theme.palette.primary.contrastText,
    },
  },
}))

const Layout = (props: LayoutProps) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
        <SEO description={props.description || "Globo Hacktoberfest"}  title={props.title || "Globo Hacktoberfest"} />
        <Header />
        {props.headerTitle && <HeaderTitle title={props.headerTitle}/> }
          <main>{props.children}</main>
        <Footer/>
    </div>
  )
}

interface LayoutProps {
  children: React.ReactNode
  headerTitle?: string,
  title: string,
  description?: string
}

export default Layout
