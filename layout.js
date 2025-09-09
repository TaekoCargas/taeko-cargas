import './globals.css'

export const metadata = {
  title: 'Taeko Cargas',
  description: 'Soluções em transporte de cargas',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
