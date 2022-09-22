import Link from "@docusaurus/Link"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import VersionedLink from "@site/src/components/VersionedLink"
import Discord from "@site/static/icons/discord.svg"
import flaregun from "@site/static/img/flaregun.png"
import Proxyflare from "@site/static/img/proxyflare.svg"
import Layout from "@theme/Layout"
import clsx from "clsx"
import React from "react"
import styles from "./index.module.scss"

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <img src={flaregun} alt="Flaregun" />
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={`${styles.center} hero__subtitle`}>
          <Link
            className={`${styles.textIconLink} button button--secondary button--md`}
            href="https://discord.gg/ukPanmZPsq"
            rel="noopener noreferrer"
          >
            <Discord width={24} height={24} />
            <span>Join the conversation</span>
          </Link>
        </p>
      </div>
    </header>
  )
}

function HomepageApps() {
  return (
    <div className={styles.columns}>
      <div className={`${styles.column} ${styles.red}`}>
        <div className={styles.textIconLink}>
          <Proxyflare width={24} height={24} />
          <span>Proxyflare for Pages</span>
        </div>
        <div className={styles.tagline}>Move traffic around your website</div>

        <div className={styles.links}>
          <VersionedLink
            className="button button--primary button--md"
            to="/proxyflare/plugin/index"
          >
            Get Started
          </VersionedLink>
          <Link
            className="button button--secondary button--md"
            href="https://proxyflare.works"
            rel="noopener noreferrer"
          >
            View Demo
          </Link>
        </div>
      </div>
      {/* <div className={`${styles.column} ${styles.blue}`}>
        <div className={styles.textIconLink}>
          <Edgeflare width={24} height={24} />
          <span>Edgeflare for Pages</span>
        </div>
        <div className={styles.tagline}>A real dank thing</div>
        <div className={styles.links}>
          <VersionedLink
            className="button button--primary button--md"
            to="/edgeflare/plugin/index"
          >
            Get Started
          </VersionedLink>
          <Link
            className="button button--secondary button--md"
            href="https://proxyflare.works"
            rel="noopener noreferrer"
          >
            View Demo
          </Link>
        </div>
      </div> */}
    </div>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <HomepageHeader />
      <main>
        <HomepageApps />
      </main>
    </Layout>
  )
}
