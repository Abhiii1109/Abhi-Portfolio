export default function manifest() {
  return {
    name: 'Abhi Prajapati - Portfolio',
    short_name: 'Abhi',
    description: 'Aesthetic and Premium Developer Portfolio',
    start_url: '/',
    display: 'standalone',
    background_color: '#030303',
    theme_color: '#ff3333',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
