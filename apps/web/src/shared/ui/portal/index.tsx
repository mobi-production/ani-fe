import ReactDOM from 'react-dom'

type PortalProps = { onClose: () => void; withBackDrop: boolean } & PropsNeedChildren

function Portal({ children }: PortalProps) {
  const portalElement = typeof window !== 'undefined' && document.querySelector('#portal-container')

  return portalElement && children ? ReactDOM.createPortal(children, portalElement) : null
}

export default Portal
