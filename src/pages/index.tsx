import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import VersionedLink from "@site/src/components/VersionedLink"
import flaregun from "@site/static/img/flaregun.png"
import Layout from "@theme/Layout"
import clsx from "clsx"
import React from "react"
import styles from "./index.module.scss"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <img src={flaregun} alt="Hasuras Image" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.links}>
          <VersionedLink
            className="button button--primary button--lg"
            to="/proxyflare/plugin/index"
          >
            Proxyflare Docs
          </VersionedLink>
          <VersionedLink
            className="button button--success button--lg"
            to="/edgeflare/plugin/index"
          >
            Edgeflare Docs
          </VersionedLink>
        </div>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={siteConfig.title}
      description="Hasura gives you instant GraphQL APIs on your data sources. Point Hasura to your preferred internal and external data sources, setup relationships and security rules on your data models across sources and get a managed unified GraphQL API to build modern applications, instantly."
    >
      <HomepageHeader />
      <main></main>
    </Layout>
  )
}
