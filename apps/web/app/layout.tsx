import { pretendardFont } from './_fonts'
import '@/styles/globals.css'

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={`${pretendardFont.variable}`}
      lang='ko'>
      <body>{children}</body>
    </html>
  )
}
