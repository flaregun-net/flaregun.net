import Link from "@docusaurus/Link"
import { useProduct } from "@site/src/utils/useProduct"
import ArrowRight from "@site/static/icons/arrow_right.svg"
import Star from "@site/static/img/star.svg"
import React from "react"
import styles from "./styles.module.scss"

const AppBanner = () => {
  const { productSlug, productName } = useProduct()

  const gg = {
    edgeflare: (
      <>
        <h3>Use {productName} Platform for Free</h3>
        <ul className={styles["desc"]}>
          <li>
            <Star />
            Build apps and APIs 10x faster
          </li>
          <li>
            <Star />
            Built-in authorization and caching
          </li>
          <li>
            <Star />
            8x more performant than hand-rolled APIs
          </li>
        </ul>
      </>
    ),
    proxyflare: (
      <>
        <h3>Use {productName} Platform for Free</h3>
        <ul className={styles["desc"]}>
          <li>
            <Star />
            Build apps and APIs 10x faster
          </li>
          <li>
            <Star />
            Built-in authorization and caching
          </li>
          <li>
            <Star />
            8x more performant than hand-rolled APIs
          </li>
        </ul>
      </>
    ),
  }[productSlug]

  return (
    <Link
      className={styles["remove-text-decoration"]}
      href="https://flaregun.net/signup"
    >
      <div className={styles["app-with-flaregun-wrapper"]}>
        <div className={styles["p40"]}>
          {gg || (
            <>
              <h3>Get Started with Flaregun for Free</h3>
              <ul className={styles["desc"]}>
                <li>
                  <Star />
                  Build apps and APIs 10x faster
                </li>
                <li>
                  <Star />
                  Built-in authorization and caching
                </li>
                <li>
                  <Star />
                  8x more performant than hand-rolled APIs
                </li>
              </ul>
              <div className={styles["try-flaregun-div"]}>
                Try {productName} with Flaregun
                <div className={styles["arrow"]}>
                  <ArrowRight />
                </div>
              </div>
            </>
          )}
        </div>
        <div className={styles["show-mobile"]}>
          <img src={""} alt="Promo" />
        </div>
      </div>
    </Link>
  )
}

export default AppBanner
