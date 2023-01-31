import Link from "@docusaurus/Link"
import clsx from "clsx"
import React from "react"
import styles from "./styles.module.scss"

export function HomepageDiscord() {
  return (
    <div className={clsx(["hero hero--dark", styles.wrapper])}>
      <div className="container">
        <div className="row">
          <div className="col col--12 flex-center">
            <h3 className="hero__title">Join in the conversation</h3>
            <p className="hero__subtitle">
              Questions or feedback? Hop in our Discord to chat.
            </p>
            <Link
              className="button button--secondary button--inline-block"
              href="https://discord.gg/ZqeZsA3qCT"
              rel="noopener noreferrer"
            >
              <div className={styles.textIconLink}>
                <span>Join Flaregun</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
