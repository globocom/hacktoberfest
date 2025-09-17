import React, { useEffect } from 'react'

const SCRIPT_SRC = 'https://vlibras.gov.br/app/vlibras-plugin.js'
const SCRIPT_ID = 'vlibras-plugin-script'

// Augment para aceitar atributos custom no JSX sem warnings de TS
declare module 'react' {
  interface HTMLAttributes<T> {
    vw?: any
    'vw-access-button'?: any
    'vw-plugin-wrapper'?: any
  }
}

const VLibras: React.FC = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') return
    if (document.querySelector('.vw-plugin-wrapper')) return

    const init = () => {
      if (window.VLibras && !document.querySelector('.vw-plugin-wrapper')) {
      new window.VLibras.Widget('https://vlibras.gov.br/app')
        }
    }

    let scriptEl = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null
    if (!scriptEl) {
      scriptEl = document.createElement('script')
      scriptEl.id = SCRIPT_ID
      scriptEl.src = SCRIPT_SRC
      scriptEl.async = true
      scriptEl.onload = init
      document.body.appendChild(scriptEl)
    } else {
      init()
    }
  }, [])

  return (
    <div className="vlibras-wrapper" style={{ position: 'fixed', bottom: 16, right: 16, zIndex: 9999 }}>
      <div vw="" className="enabled">
        <div vw-access-button="" className="active" />
        <div vw-plugin-wrapper="">
          <div className="vw-plugin-top-wrapper" />
        </div>
      </div>
    </div>
  )
}

export default VLibras
