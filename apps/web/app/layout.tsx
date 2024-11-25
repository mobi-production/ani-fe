import '@config/libs/globals.css'

import { pretendardFont } from './_fonts'
import { Flex } from '@repo/ui/server'
import Header from '@/shared/ui/header'
import LoginModal from '@/features/auth/ui/login-modal'

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
        <body className='bg-background-alternative'>
          <div id='portal-container'></div>
          <div className='mb-[3.25rem]'>
            <Header isLoggedIn={isLoggedIn} />
          </div>
          {children}
          <LoginModal />
        </body>
      </Flex>
    </html>
  )
}
