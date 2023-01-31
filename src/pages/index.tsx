import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import CustomFooter from "@site/src/components/CustomFooter"
import Layout from "@theme/Layout"
import React from "react"
import { HomepageApps } from "../components/HomepageApps"
import { HomepageDiscord } from "../components/HomepageDiscord"
import { HomepageHeader } from "../components/HomepageHeader"

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageApps />
        <HomepageDiscord />
      </main>
      <CustomFooter />
    </Layout>
  )
}
