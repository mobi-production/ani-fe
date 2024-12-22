import '@config/libs/globals.css'

import { pretendardFont } from './_fonts'
import { Flex } from '@repo/ui/server'
import { Header } from '@/shared/ui/header'
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
      <body className='bg-background-alternative'>
        <div id='portal-container' />
        <Flex
          asChild
          className='w-full gap-[52px]'
          direction={'column'}>
          <main>
            <Header />
            {children}
          </main>
        </Flex>
      </body>
    </html>
  )
}
