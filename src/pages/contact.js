import Contact from 'components/Contact'
import Layout from 'components/Layout'
import PageHeader from 'components/Layout/PageHeader'
import { ParagraphStyles } from 'styles'
import React from 'react'
import SEO from 'components/Seo'
import Social from 'components/Social'

const ContactPage = () => {
  return (
    <Layout>
      {/* eslint-disable react/jsx-pascal-case */}
      <SEO title="Contact" />
      <PageHeader>Contact</PageHeader>
      <ParagraphStyles>
        Do you need a new website for your growing business? Are you looking to
        learn to build websites yourself? If you answered yes to either of these
        questions, you are in luck. I love building fast performant websites and
        teaching others to do the same. Fill out the form below and let me know
        what I can do for you!
      </ParagraphStyles>
      <Contact />
      <Social />
    </Layout>
  )
}

export default ContactPage
