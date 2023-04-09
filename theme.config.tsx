import { NextraBlogTheme } from 'nextra-theme-blog'

const config: NextraBlogTheme = {
  footer: <></>,
  head: ({ title, meta }) => (
    <>
      {meta.description && (
        <meta name="description" content={meta.description} />
      )}
      {meta.tag && <meta name="keywords" content={meta.tag} />}
      {meta.author && <meta name="author" content={meta.author} />}
    </>
  ),
}

export default config
