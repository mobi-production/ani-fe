import ReactDOM from 'react-dom'

function Portal({ children }: PropsNeedChildren) {
  const portalElement = typeof window !== 'undefined' && document.querySelector('#portal-container')

  return portalElement && children ? ReactDOM.createPortal(children, portalElement) : null
}

export default Portal
