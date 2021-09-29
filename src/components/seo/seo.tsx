import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface Meta {
  name?: string
  property?: string
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
            url
            images {
              opengraph {
                type
                url
                width
                height
              }
            }
          }
        }
      }
    `
  )
  const metaDescription: string = props.description || site.siteMetadata.description
  const defaultTitle: string = site.siteMetadata?.title
  const titleTemplate: string = defaultTitle ? `%s | ${defaultTitle}` : `%s`
  const { images: { opengraph: metaImg } } = site.siteMetadata
  return (
    <Helmet
      htmlAttributes={{
        lang: "pt-br",
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
          property: `og:image`,
          content: `${site.siteMetadata?.url}/${metaImg.url}`
        },
        {
          property: `og:image:type`,
          content: metaImg.type
        },
        {
          property: `og:image:width`,
          content: metaImg.width
        },
        {
          property: `og:image:height`,
          content: metaImg.height
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
        {
          name: `twitter:image`,
          content: `${site.siteMetadata?.url}/${metaImg.url}`,
        }
      ]}
    />
  )
}

export default Seo
