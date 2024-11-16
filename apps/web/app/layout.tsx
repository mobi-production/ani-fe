import '@config/libs/globals.css'

import { pretendardFont } from './_fonts'
import { Flex } from '@repo/ui/server'
import Header from '@/widget/ui/header'

// TODO: 로그인 상태 추가
const isLoggedIn = false

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      className={`${pretendardFont.variable}`}
      lang='ko'>
      <Flex
        asChild
        direction={'column'}
        className='w-full'>
        <body className='gap-[3.25rem] bg-background-alternative'>
          <Header isLoggedIn={isLoggedIn} />
          {children}
        </body>
      </Flex>
    </html>
  )
}
