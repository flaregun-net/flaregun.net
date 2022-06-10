import VersionedLink from "@site/src/components/VersionedLink"
import EdgeflareIcon from "@site/static/img/edgeflare.svg"
import React from "react"
import styles from "./styles.module.scss"

export function Edgeflare() {
  return (
    <div className="card">
      <div className="card__header">
        <div className={styles.textIconLink}>
          <EdgeflareIcon width={24} height={24} />
          <h3>Edgeflare</h3>
        </div>
        <div className={styles.tagline}>Maintenance mode at the edge</div>
      </div>
      <div className="card__body">
        <p>
          Offload your complex maintenance mode infrastructure. Activate
          maintenance mode on one part of your domain while keeping the rest
          online with developer-friendly features.
        </p>
        <ul>
          <li>One click maintenance mode anywhere on your domain</li>
          <ul>
            <li>Schedule it or activate it immediately</li>
          </ul>
          <li>Never go down again</li>
          <ul>
            <li>User-friendly templates instead of scary 500 errors</li>
          </ul>
          <li>Bypass codes for developers</li>
        </ul>
      </div>
      <div className="card__footer">
        <div className={styles.links}>
          <VersionedLink
            className="button button--primary button--md"
            to="/edgeflare/plugin/index"
            disabled={true}
          >
            Coming soon
          </VersionedLink>
          {/* <Link
              className="button button--secondary button--md"
              href="https://proxyflare.works"
              rel="noopener noreferrer"
              {...{ disabled: true }}
            >
              Coming soon
            </Link> */}
        </div>
      </div>
    </div>
  )
}
