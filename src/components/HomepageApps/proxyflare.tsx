import Link from "@docusaurus/Link"
import VersionedLink from "@site/src/components/VersionedLink"
import ProxyflareIcon from "@site/static/img/proxyflare.svg"
import clsx from "clsx"
import React from "react"
import styles from "./styles.module.scss"

export function Proxyflare() {
  return (
    <div className="card">
      <div className={clsx("card__header", styles.appHeading)}>
        <div className={styles.textIconLink}>
          <ProxyflareIcon width={24} height={24} />
          <h3>Proxyflare</h3>
        </div>
        <p>Move traffic around your domain with ease</p>
      </div>
      <div className="card__body">
        <p>
          A reverse proxy for your website deployed on Cloudflare Pages. Send
          traffic from one place on your domain to another, or elsewhere on the
          internet.
        </p>
        <ul>
          <li>
            Proxy traffic over <b>http(s): or ws(s):</b> to another service{" "}
          </li>
          <li>
            Send traffic to services listening on <b>custom ports</b>
          </li>
          <li>
            Host a documentation site or blog <b>on a subpath</b>
          </li>
          <li>
            <b>Redirect traffic</b> and <b>serve static content</b>
          </li>
        </ul>
        <p>...and much more.</p>
      </div>
      <div className="card__footer">
        <div className={styles.links}>
          <Link
            className="button button--primary button--md"
            href="https://proxyflare.works"
            rel="noopener noreferrer"
          >
            See it in action
          </Link>
          <VersionedLink
            className="button button--secondary button--md"
            to="/proxyflare/plugin/getting-started"
          >
            Read the docs
          </VersionedLink>
        </div>
      </div>
    </div>
  )
}
