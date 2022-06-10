import Link from "@docusaurus/Link"
import React from "react"

const VersionedLink = ({ to, ...props }) => (
  <Link to={`/docs/latest${to}`} {...props} />
)

export default VersionedLink
