import { deleteSession } from '@/shared/libs/session'
import { NextResponse } from 'next/server'

export const GET = async () => {
  await deleteSession()
  
  // 쿠키를 확실히 삭제하기 위한 응답 헤더 설정
  const response = NextResponse.json({ success: true })
  response.cookies.delete('session')
  
  return response
}
