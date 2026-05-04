import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const clientDist = path.resolve(__dirname, 'dist')
const ssrDist = path.resolve(__dirname, 'dist-ssr')

const routes = [
  '/',
  '/features',
  '/pricing',
  '/about',
  '/blog',
  '/blog/the-9400-problem',
  '/blog/avalanche-vs-snowball',
  '/blog/12-subscriptions',
  '/blog/11-tax-deductions',
  '/blog/50-30-20-rule-dead',
  '/blog/investing-with-100',
  '/blog/credit-score-went-down',
  '/contact',
  '/advisors',
  '/terms',
  '/privacy',
]

/**
 * React 19 renders <title>/<meta>/<link>/<script> tags inline before the
 * first block element. Split them out so they can be moved to <head>.
 */
function splitHeadAndBody(html) {
  // Find the first opening <div (the outer layout wrapper)
  const idx = html.indexOf('<div')
  if (idx <= 0) return { headTags: '', bodyHtml: html }
  return {
    headTags: html.slice(0, idx).trim(),
    bodyHtml: html.slice(idx),
  }
}

async function prerender() {
  const ssrEntry = path.resolve(ssrDist, 'entry-server.js')
  const { render } = await import(ssrEntry)
  const template = fs.readFileSync(path.resolve(clientDist, 'index.html'), 'utf-8')

  for (const route of routes) {
    process.stdout.write(`Pre-rendering ${route} ... `)

    const raw = render(route)
    const { headTags, bodyHtml } = splitHeadAndBody(raw)

    let page = template

    // Replace the <!--seo-start-->…<!--seo-end--> block with per-page head tags
    if (headTags) {
      page = page.replace(/<!--seo-start-->[\s\S]*?<!--seo-end-->/, headTags)
    }

    // Inject pre-rendered body content into the root div
    page = page.replace(
      '<div id="root"></div>',
      `<div id="root">${bodyHtml}</div>`
    )

    // Determine output path and write file
    const routeDir =
      route === '/' ? clientDist : path.resolve(clientDist, route.slice(1))

    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true })
    }

    fs.writeFileSync(path.resolve(routeDir, 'index.html'), page, 'utf-8')
    console.log('done')
  }

  // Clean up SSR build artifacts
  fs.rmSync(ssrDist, { recursive: true, force: true })
  console.log(`\n✓ Pre-rendered ${routes.length} routes`)
}

prerender().catch((err) => {
  console.error('\nPre-render failed:', err)
  process.exit(1)
})
