import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export function usePortal() {
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null)
  const isClient = typeof window !== 'undefined'

  useEffect(() => {
    if (!isClient) return

    let container = document.querySelector('#portal-container')

    if (!container) {
      container = document.createElement('div')
      container.id = 'portal-container'
      document.body.appendChild(container)
    }

    container.setAttribute(
      'style',
      `
      position: fixed;
      z-index: 999999;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
    `
    )
    setPortalElement(container as HTMLElement)

    return () => {
      if (container?.parentElement && container.childNodes.length === 0) {
        container.parentElement.removeChild(container)
      }
    }
  }, [isClient])

  return {
    renderInPortal: (children: React.ReactNode) =>
      portalElement ? createPortal(children, portalElement) : null
  }
}
