'use client'

export default function Page({ searchParams }: { searchParams: { code: string } }) {
  return <div>Error: {searchParams.code}</div>
}
