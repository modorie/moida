import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import { PortalProps } from './Portal.types'

const Portal = ({
  children,
  id = 'moida-portal',
  element = 'div',
}: PortalProps) => {
  const [container] = useState(() => {
    const el = document.createElement(element)
    el.setAttribute('id', id)
    return el
  })

  useEffect(() => {
    document.body.appendChild(container)
    return () => {
      document.body.removeChild(container)
    }
  }, [container])

  return createPortal(children, container)
}

export default Portal
