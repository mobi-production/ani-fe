import { PropsWithChildren } from 'react'

function ChildrenDepthComponent({ children }: PropsWithChildren) {
  return <div className='pl-5'>{children}</div>
}

export default ChildrenDepthComponent
