import { PropsWithChildren } from 'react'

function ChildrenDepthComponent({ children }: PropsWithChildren) {
  return <div className='pl-[27px]'>{children}</div>
}

export default ChildrenDepthComponent
