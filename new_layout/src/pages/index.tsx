import React from "react"
import { ThemeProvider } from '@material-ui/core/styles';
import Layout from "@components/layout"
import SEO from "@components/seo"
import Theme from '@themes/2021'

const IndexPage = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Layout>
        <SEO title="Home" />
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          
        </div>
      </Layout>
    </ThemeProvider>
    )
}

export default IndexPage