import { NextResponse } from 'next/server'
import { signIn } from '@/auth'
import { oauthLogin } from '@/features/auth/api/oauth-login'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get('code')
    const state = searchParams.get('state')

    if (!code || !state) {
      return NextResponse.redirect(process.env.NEXT_PUBLIC_CLIENT_URL ?? '/error/404')
    }

    const response = await oauthLogin({ provider: 'discord', state, code })

    const urlObject = new URL(response.url)
    const accessToken = urlObject.searchParams.get('accessToken')
    const refreshToken = urlObject.searchParams.get('refreshToken')

    if (!accessToken || !refreshToken) {
      return NextResponse.redirect(process.env.NEXT_PUBLIC_CLIENT_URL ?? '/error/404')
    }

    await signIn('discord', {
      accessToken,
      refreshToken,
      redirect: false
    })

    return NextResponse.redirect(process.env.NEXT_PUBLIC_CLIENT_URL)
  } catch (error) {
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_CLIENT_URL}/error`)
  }
}
