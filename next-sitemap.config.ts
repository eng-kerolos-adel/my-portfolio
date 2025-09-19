import type { IConfig } from 'next-sitemap'

const config: IConfig = {
  siteUrl: 'https://yourportfolio.com', 
  generateRobotsTxt: true,
  changefreq: 'monthly',
  priority: 1.0,
  sitemapSize: 5000,
}

export default config
