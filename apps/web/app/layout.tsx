import '@config/libs/globals.css'

import { pretendardFont } from './_fonts'
import { Flex } from '@repo/ui/server'
import Header from '@/shared/ui/header'
import LoginModal from '@/features/auth/ui/login-modal'
import SignupModal from '@/features/auth/ui/signup-modal'
import { SessionProvider } from 'next-auth/react'

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
      <SessionProvider>
        <Flex
          asChild
          direction={'column'}
          className='w-full'>
          <body className='bg-background-alternative'>
            <div id='portal-container'></div>
            <div className='mb-[3.25rem]'>
              <Header />
            </div>
            {children}
            <LoginModal />
            <SignupModal />
          </body>
        </Flex>
      </SessionProvider>
    </html>
  )
}
