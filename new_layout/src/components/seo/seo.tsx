
import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Meta {
  name?: string,
  property?: string,
  content: string
}
interface SeoProps {
  description: string
  meta?: Array<Meta>
  title: string
}

const Seo = (props: SeoProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )
  const metaDescription: string = props.description || site.siteMetadata.description
  const defaultTitle: string = site.siteMetadata?.title
  const titleTemplate: string =  defaultTitle ? `%s | ${defaultTitle}` : `%s`
  
  return (
    <Helmet
    htmlAttributes={{
      lang: "pt-br"
    }}
    title={props.title}
    titleTemplate={titleTemplate}
    meta={[
      {
        name: `description`,
        content: metaDescription,
      },
      {
        property: `og:title`,
        content: props.title,
      },
      {
        property: `og:type`,
        content: `website`,
      },
      {
        name: `twitter:card`,
        content: `summary`,
      },
      {
        property: `og:description`,
        content: metaDescription,
      },
      {
        name: `twitter:creator`,
        content: site.siteMetadata?.author || ``,
      },
      {
        name: `twitter:title`,
        content: props.title,
      },
      {
        name: `twitter:description`,
        content: metaDescription,
      },
    ]}
  />
  )
}

export default Seo
