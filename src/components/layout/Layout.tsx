import * as React from "react"
import './reset.css'
import {Header, HeaderTitle} from "@components/header"
import Footer from "@components/footer"
import Slide from '@material-ui/core/Slide'
import Fade from '@material-ui/core/Fade'
import { makeStyles, Theme } from "@material-ui/core"
import SEO from '@components/seo'
import UserInfoAlert from "@components/user-info-alert"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    fontFamily: theme.typography.fontFamily,
    "& a": {
      textDecoration: "none",
    }
  },
  body: {
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
    animation: `$gradient-effect 15s ease infinite`,
  }
}))

const Layout = (props: LayoutProps) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.body}>
        <SEO description={props.description || "Globo Hacktoberfest"}  title={props.title || "Globo Hacktoberfest"} />
        <Header />
          <Slide direction="up" timeout={3000} in={true} mountOnEnter unmountOnExit>
            <div>
              <Fade in={true} timeout={3000}>
                <main>
                  {props.children}
                </main>
              </Fade>
            </div>
          </Slide>
        <UserInfoAlert />
      </div>
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
