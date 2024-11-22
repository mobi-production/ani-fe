import Image from 'next/image'

function FloatingAction() {
  return (
    <div className='fixed bottom-[3.625rem] right-[3.625rem] z-10 flex h-[3.625rem] w-[3.625rem] cursor-pointer items-center justify-center rounded-full bg-label-normal hover:opacity-90 active:opacity-100'>
      <Image
        src='/webp/1on1chat.webp'
        width={32}
        height={32}
        alt='1on1Chat'
      />
    </div>
  )
}

export default FloatingAction
