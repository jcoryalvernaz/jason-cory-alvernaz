import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeadingStyles from "../styles/HeadingStyles"
import ParagraphStyles from "../styles/ParagraphStyles"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <HeadingStyles>404: Not Found</HeadingStyles>
    <ParagraphStyles>
      You just hit a page that doesn&#39;t exist... Oh no.
    </ParagraphStyles>
    <ParagraphStyles>
      Don't worry, there are plenty of other pages to visit. Head up to the
      navigation and take a look around.
    </ParagraphStyles>
  </Layout>
)

export default NotFoundPage
