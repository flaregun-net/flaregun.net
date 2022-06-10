import flaregun from "@site/static/img/flaregun.png"
import clsx from "clsx"
import React from "react"
import styles from "./styles.module.scss"

export function HomepageHeader() {
  return (
    <header className="hero">
      <div className={clsx(styles.heroBanner)}>
        <img
          src={flaregun}
          alt="Flaregun"
          style={{ position: "relative", left: 20 }}
        />
        <h2 className={clsx("hero__title", styles.heroTitle)}>
          Convenient applications for your
          <span className={clsx(styles.underline)}>
            Cloudflare powered domain
          </span>
        </h2>
        <h3 className={clsx(styles.heroTitle)} style={{ fontWeight: 400 }}>
          ⚡ Make hard networking problems
          <span className={clsx(styles.underline, styles["red-underline"])}>
            easy.
          </span>
        </h3>
      </div>
      <p className="hero__subtitle"></p>
    </header>
  )
}
