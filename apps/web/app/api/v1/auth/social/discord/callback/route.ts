import { oauthCallback } from '@/features/auth/api/oauth-callback'
import { createSession } from '@/shared/libs/session'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (request: NextRequest) => {
  try {
    const { searchParams } = new URL(request.url)
    const code = searchParams.get('code')
    const state = searchParams.get('state')

    if (!code || !state) {
      return NextResponse.redirect(process.env.NEXT_PUBLIC_CLIENT_URL ?? '/error/404')
    }

    const response = await oauthCallback({ provider: 'discord', state, code })

    const tokenUrl = new URL(response.url)
    const accessToken = tokenUrl.searchParams.get('accessToken')
    const refreshToken = tokenUrl.searchParams.get('refreshToken')

    if (!accessToken || !refreshToken) {
      return NextResponse.redirect(process.env.NEXT_PUBLIC_CLIENT_URL ?? '/error/404')
    }

    await createSession({ accessToken, refreshToken })

    const baseUrl = new URL(request.url).origin
    const redirectUrl = new URL(baseUrl)
    redirectUrl.searchParams.set('login_success', 'true')

    return NextResponse.redirect(redirectUrl)
  } catch (error) {
    console.error(error)
    return NextResponse.redirect(`${process.env.NEXT_PUBLIC_CLIENT_URL}/error`)
  }
}
