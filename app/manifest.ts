import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kerolos Adel – Portfolio',
    short_name: 'Portfolio',
    description: 'الموقع الرسمي لـ Kerolos Adel، مطوّر واجهات أمامية ومصمم ويب.',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#ffffff',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/logo.webp',
        sizes: '192x192',
        type: 'image/webp',
      }
    ],
  }
}