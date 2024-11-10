import '@config/libs/globals.css'

import { pretendardFont } from './_fonts'

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
