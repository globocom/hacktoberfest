import * as React from "react"
import './reset.css'
import {Header, HeaderTitle} from "@components/header"
import Footer from "@components/footer"
import Slide from '@material-ui/core/Slide'
import { makeStyles, Theme } from "@material-ui/core"
import SEO from '@components/seo'
import UserInfoAlert from "@components/user-info-alert"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    minHeight: "100vh",
    background: "linear-gradient(180deg, rgba(0,0,0,1) 66%, rgba(0,78,130,1) 82%, rgba(53,146,214,1) 92%, rgba(255,255,255,1) 102%);",
    backgroundAttachment: 'fixed',
    fontFamily: theme.typography.fontFamily,
    "& a": {
      textDecoration: "none",
    },
    padding: 16,
    [theme.breakpoints.up(theme.breakpoints.values.sm)]: {
      padding: 24,
    },
    [theme.breakpoints.up(theme.breakpoints.values.md)]: {
      padding: 40,
    },
    [theme.breakpoints.up(theme.breakpoints.values.xl)]: {
      padding: 80,
    },
  },
}))

const Layout = (props: LayoutProps) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
        <SEO description={props.description || "Globo Hacktoberfest"}  title={props.title || "Globo Hacktoberfest"} />
        <Header />
          <Slide direction="up" timeout={1500} in={true} mountOnEnter unmountOnExit>
            <main>
              {props.children}
            </main>
          </Slide>
        <UserInfoAlert />
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
