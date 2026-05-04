import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Layout } from './App'

/**
 * Renders the given URL to a static HTML string.
 * React 19 hoists <title>/<meta>/<link> tags inline before the first block
 * element; the caller is responsible for splitting and moving them to <head>.
 */
export function render(url: string): string {
  return renderToStaticMarkup(
    <HelmetProvider>
      <StaticRouter location={url}>
        <Layout />
      </StaticRouter>
    </HelmetProvider>
  )
}
