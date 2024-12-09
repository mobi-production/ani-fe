import { PropsWithChildren } from 'react'

type Props = {
  columnsLength: number
}

function SDUColumnList({ columnsLength, children }: PropsWithChildren<Props>) {
  return (
    <ol
      className='grid gap-3'
      style={{ gridTemplateColumns: `repeat(${columnsLength}, 1fr)` }}>
      {children}
    </ol>
  )
}

export default SDUColumnList
