import useIsBrowser from "@docusaurus/useIsBrowser"
import VersionedLink from "@site/src/components/VersionedLink"
// import Proxyflare from "@site/static/img/proxyflare.svg"
// import Edgeflare from "@site/static/img/edgeflare.svg"
import Content from "@theme-original/DocSidebar/Desktop/Content"
import React from "react"
import styles from "./customStyles.module.scss"

export default function ContentWrapper(props) {
  const isBrowser = useIsBrowser()

  const productSlug =
    isBrowser && window.location.pathname.includes("/edgeflare/")
      ? "edgeflare"
      : window.location.pathname.includes("/proxyflare/")
      ? "proxyflare"
      : null

  const isDoc = {
    edgeflare: {
      pages:
        isBrowser && window.location.pathname.includes("/edgeflare/plugin/"),
      platform:
        isBrowser && window.location.pathname.includes("/edgeflare/platform/"),
    },
    proxyflare: {
      pages:
        isBrowser && window.location.pathname.includes("/proxyflare/plugin/"),
      platform:
        isBrowser && window.location.pathname.includes("/proxyflare/platform/"),
    },
  }[productSlug]

  return (
    <>
      <div className={styles["doc-sidebar-header"]}>{productSlug}</div>
      <div className={styles["doc-sidebar-tabs"]}>
        <VersionedLink
          to={`/${productSlug}/plugin/index/`}
          className={`${styles["link-tab"]} ${
            isDoc.pages ? styles["active"] : ""
          }`}
        >
          Plugin for Pages
        </VersionedLink>
        <VersionedLink
          to={`/${productSlug}/platform/index/`}
          className={`${styles["link-tab"]} ${
            isDoc.platform ? styles["active"] : ""
          }`}
        >
          Platform
        </VersionedLink>
      </div>
      <Content {...props} />
    </>
  )
}
