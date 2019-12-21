const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Ngiq Component',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/liangfangzheng/Desktop/Pro/ngiq-component/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Ngiq Component',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/liangfangzheng/Desktop/Pro/ngiq-component',
          templates:
            '/Users/liangfangzheng/Desktop/Pro/ngiq-component/node_modules/docz-core/dist/templates',
          docz: '/Users/liangfangzheng/Desktop/Pro/ngiq-component/.docz',
          cache:
            '/Users/liangfangzheng/Desktop/Pro/ngiq-component/.docz/.cache',
          app: '/Users/liangfangzheng/Desktop/Pro/ngiq-component/.docz/app',
          appPackageJson:
            '/Users/liangfangzheng/Desktop/Pro/ngiq-component/package.json',
          gatsbyConfig:
            '/Users/liangfangzheng/Desktop/Pro/ngiq-component/gatsby-config.js',
          gatsbyBrowser:
            '/Users/liangfangzheng/Desktop/Pro/ngiq-component/gatsby-browser.js',
          gatsbyNode:
            '/Users/liangfangzheng/Desktop/Pro/ngiq-component/gatsby-node.js',
          gatsbySSR:
            '/Users/liangfangzheng/Desktop/Pro/ngiq-component/gatsby-ssr.js',
          importsJs:
            '/Users/liangfangzheng/Desktop/Pro/ngiq-component/.docz/app/imports.js',
          rootJs:
            '/Users/liangfangzheng/Desktop/Pro/ngiq-component/.docz/app/root.jsx',
          indexJs:
            '/Users/liangfangzheng/Desktop/Pro/ngiq-component/.docz/app/index.jsx',
          indexHtml:
            '/Users/liangfangzheng/Desktop/Pro/ngiq-component/.docz/app/index.html',
          db:
            '/Users/liangfangzheng/Desktop/Pro/ngiq-component/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
