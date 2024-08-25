import { useRouter } from 'next/router'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'
import { images } from "./src/data"

const config: DocsThemeConfig = {
  logo: <span>utsx docs</span>,
  project: {
    link: 'https://github.com/AbidAlWassie/utsx-docs',
  },
  chat: {
    link: 'https://discord.gg/zBGa2GSn5w',
  },
  docsRepositoryBase: 'https://github.com/AbidAlWassie/utsx-docs',
  footer: {
    text: 'utsx ui library',
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://my-app.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)

    return (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || 'utsx docs'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Documentation for the utsx UI library'}
        />
        <title>{frontMatter.title || 'utsx docs'}</title>
        <meta name="description" content={frontMatter.description || 'Documentation for the utsx UI library'} />
        {/* <link rel="shortcut icon" href="/favicon.ico" /> */}
        <link rel="shortcut icon" href={`${images.icon}`} />
      </>
    )
  }
}

export default config
