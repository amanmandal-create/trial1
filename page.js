import './globals.css'

export const metadata = {
  title: 'Learn With Ranjan',
  description: 'Educational website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}