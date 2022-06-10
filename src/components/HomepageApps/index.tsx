import React from "react"
import { Edgeflare } from "./edgeflare"
import { Proxyflare } from "./proxyflare"

export function HomepageApps() {
  return (
    <div className="hero shadow--lw">
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
    </div>
  )
}
