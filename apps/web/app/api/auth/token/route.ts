import { NextResponse } from 'next/server'
import { getServerToken } from '@/features/auth/api/token-management'

export async function GET() {
  const token = await getServerToken()

  if (!token) {
    return NextResponse.json({ message: '로그인이 필요합니다.' }, { status: 401 })
  }

  return NextResponse.json({ accessToken: token.accessToken, refreshToken: token.refreshToken })
}
