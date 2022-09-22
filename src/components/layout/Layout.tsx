import * as React from "react"
import './reset.css'
import {Header, HeaderTitle} from "@components/header"
import Footer from "@components/footer"
import { makeStyles, Theme } from "@material-ui/core"
import SEO from '@components/seo'
import UserInfoAlert from "@components/user-info-alert"

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: "linear-gradient(180deg, rgba(0,0,0,1) 37%, rgba(0,78,130,1) 63%, rgba(53,146,214,1) 80%, rgba(255,255,255,1) 100%);",
    backgroundAttachment: 'fixed',
    fontFamily: theme.typography.fontFamily,
    "& a": {
      textDecoration: "none",
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
          <main>
            {props.children}
          </main>
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
