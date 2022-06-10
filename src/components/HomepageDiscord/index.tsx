import Link from "@docusaurus/Link"
import DiscordIcon from "@site/static/icons/discord.svg"
import React from "react"
import styles from "./styles.module.scss"

export function HomepageDiscord() {
  return (
    <div className="hero hero--dark">
      <div className="container">
        <div className="row">
          <div
            className="col col--12"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h3 className="hero__title">Join in the conversation</h3>
            <p className="hero__subtitle">
              Questions or feedback? Hop in our Discord to chat.
            </p>
            <Link
              className="button button--primary button--inline-block"
              href="https://discord.gg/YcDwujEH"
              rel="noopener noreferrer"
            >
              <div className={styles.textIconLink}>
                <DiscordIcon width={20} height={20} />
                <span>Join Flaregun</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
