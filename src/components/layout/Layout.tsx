import * as React from "react"
import './reset.css'
import { Header } from "@components/header"
import Footer from "@components/footer"
import { makeStyles, Theme } from "@material-ui/core"
import SEO from '@components/seo'
import UserInfoAlert from "@components/user-info-alert"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    "& a": {
      textDecoration: "none",
    },
    background: theme.palette.background.default,
  },
  body: {
    padding: 0,
    [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
      padding: 0,
    },
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      padding: 0,
    },
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      padding: 0,
    },
  }
}))

const Layout = (props: LayoutProps) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <SEO description={props.description || "Globo Hacktoberfest"} title={props.title || "Globo Hacktoberfest"} />
      <Header />
      <main>
        {props.children}
      </main>
      <UserInfoAlert />
      <Footer />
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
