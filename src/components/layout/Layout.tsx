import * as React from "react"
import './reset.css'
import {Header, HeaderTitle} from "@components/header"
import Footer from "@components/footer"
import SEO from '@components/seo'
import UserInfoAlert from "@components/user-info-alert"
import { useStyles } from "./Layout.style";

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
