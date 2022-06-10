import useIsBrowser from "@docusaurus/useIsBrowser"

const productName = (slug = "") => slug[0]?.toUpperCase() + slug.slice(1)

const [edgeflare, proxyflare] = ["edgeflare", "proxyflare"]

export const useProduct = () => {
  const isBrowser = useIsBrowser()

  const productSlug =
    isBrowser && window.location.pathname.includes(`/${edgeflare}/`)
      ? edgeflare
      : isBrowser && window.location.pathname.includes(`/${proxyflare}/`)
      ? proxyflare
      : proxyflare

  return {
    productSlug,
    productName: productName(productSlug),
    isEdgeflare: productSlug === edgeflare,
    isProxyflare: productSlug === proxyflare,
  }
}
