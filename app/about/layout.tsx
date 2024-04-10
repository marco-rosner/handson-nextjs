interface RootLayout {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayout) {
  return (
    <html lang="en">
      <body className=''>{children}</body>
    </html>
  )
}
