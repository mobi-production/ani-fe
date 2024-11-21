import { ComponentProps } from 'react'

type Props = {
  text: string
} & ComponentProps<'details'>

function SDUToggle({ text, children, ...props }: PropsNeedChildren<Props>) {
  return (
    <details {...props}>
      <summary>{text}</summary>
      {children}
    </details>
  )
}

export default SDUToggle
