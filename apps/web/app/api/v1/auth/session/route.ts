import { getSession } from '@/shared/libs/session'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const sessionToken = await getSession()
    if (!sessionToken) {
      return NextResponse.json({ session: null })
    }

    return NextResponse.json({
      session: {
        accessToken: sessionToken.accessToken,
        refreshToken: sessionToken.refreshToken
      }
    })
  } catch (error) {
    return NextResponse.json({ session: null })
  }
}
