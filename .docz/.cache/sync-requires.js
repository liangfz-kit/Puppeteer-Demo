const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/liangfangzheng/Desktop/Pro/ngiq-component/.docz/.cache/dev-404-page.js"))),
  "component---readme-md": hot(preferDefault(require("/Users/liangfangzheng/Desktop/Pro/ngiq-component/README.md"))),
  "component---src-docs-index-mdx": hot(preferDefault(require("/Users/liangfangzheng/Desktop/Pro/ngiq-component/src/docs/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/liangfangzheng/Desktop/Pro/ngiq-component/.docz/src/pages/404.js")))
}

