module.exports = {
  siteMetadata: {
    title: 'Gatsby Starter - Strata by HTML5 UP',
    author: 'Hunter Chang',
    description: 'A Gatsby.js Starter based on Strata by HTML5 UP',
  },
  plugins: [
    // ヘッダ管理(SEO対策含有)
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    // offline利用可能
    'gatsby-plugin-offline',
    // css-in-js
    'gatsby-plugin-emotion',
    // レスポンシブ画像生成
    'gatsby-plugin-image',
    // Markdownの中にJSXを埋め込んで書く
    // TODO: バージョン違いでデプロイできない時がある
    'gatsby-plugin-mdx',
    // Sharp画像処理ライブラリ
    // Sharpとは、Webに適した画像変換ライブラリ
    // 一般的なウェブ画像フォーマットの設定がすでに入っており、使いやすくなっている。
    'gatsby-plugin-sharp',
    // レスポンシブ対応など
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/assets/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
  ],
}
