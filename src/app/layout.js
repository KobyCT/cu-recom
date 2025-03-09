import './globals.css'

export const metadata = {
  title: 'Cu-Recommerce',
  description: 'University shopping platform',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  )
}