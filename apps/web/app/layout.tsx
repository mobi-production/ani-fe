import { pretendardFont } from './_fonts';
import '@/styles/global.scss';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendardFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
