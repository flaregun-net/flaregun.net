import useIsBrowser from "@docusaurus/useIsBrowser"
import VersionedLink from "@site/src/components/VersionedLink"
import { useProduct } from "@site/src/utils/useProduct"
import Edgeflare from "@site/static/img/edgeflare.svg"
import Proxyflare from "@site/static/img/proxyflare.svg"
import Content from "@theme-original/DocSidebar/Desktop/Content"
import React from "react"
import styles from "./customStyles.module.scss"

export default function ContentWrapper(props) {
  const isBrowser = useIsBrowser()
  const { productSlug, productName } = useProduct()

  const isDoc = {
    pages: isBrowser && window.location.pathname.includes("/plugin/"),
    platform: isBrowser && window.location.pathname.includes("/platform/"),
  }

  const Icon = {
    proxyflare: (
      <span style={{ top: 4, position: "relative", marginRight: 8 }}>
        <Proxyflare width={16} height={16} />
      </span>
    ),
    edgeflare: (
      <span style={{ top: 4, position: "relative", marginRight: 8 }}>
        <Edgeflare width={16} height={16} />
      </span>
    ),
  }[productSlug]

  return (
    <>
      <div className={styles["doc-sidebar-tabs"]}>
        <VersionedLink
          to={`/${productSlug}/plugin/index/`}
          className={`${styles["link-tab"]} ${
            isDoc.pages ? styles["active"] : ""
          }`}
        >
          {isDoc.pages ? Icon : null}
          Cloudflare Pages
        </VersionedLink>
        <VersionedLink
          to={`/${productSlug}/platform/index/`}
          className={`${styles["link-tab"]} ${
            isDoc.platform ? styles["active"] : ""
          }`}
        >
          {isDoc.platform ? Icon : null}
          Platform
        </VersionedLink>
      </div>
      <Content {...props} />
    </>
  )
}
