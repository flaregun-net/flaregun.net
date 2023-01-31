import React from "react"
import { Edgeflare } from "./edgeflare"
import { Proxyflare } from "./proxyflare"

export function HomepageApps() {
  return (
    <section className="section" style={{ marginBottom: 80 }}>
      <div className="container">
        <div className="row">
          <div className="col col--offset-1 col--5">
            <Proxyflare />
          </div>
          <div className="col col--5">
            <Edgeflare />
          </div>
        </div>
      </div>
    </section>
  )
}
