import '@config/libs/globals.css'

import { pretendardFont } from './_fonts'
import { Flex } from '@repo/ui/server'
import Header from '@/shared/ui/header'
import { ReactNode } from 'react'

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html
      className={`${pretendardFont.variable}`}
      lang='ko'>
      <Flex
        asChild
        direction={'column'}
        className='w-full'>
        <body className='bg-background-alternative'>
          <div id='portal-container' />
          <Header />
          {children}
        </body>
      </Flex>
    </html>
  )
}
