import localFont from 'next/font/local'

export const pretendardFont = localFont({
  src: [
    {
      path: './Pretendard-Bold.subset.woff2',
      weight: 'bold',
      style: 'normal'
    },
    {
      path: './Pretendard-SemiBold.subset.woff2',
      weight: '600',
      style: 'normal'
    },
    {
      path: './Pretendard-Medium.subset.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: './Pretendard-Regular.subset.woff2',
      weight: 'normal',
      style: 'normal'
    }
  ],

  display: 'swap',
  preload: true,
  variable: '--font-pretendard',
  fallback: ['sans-serif']
})
