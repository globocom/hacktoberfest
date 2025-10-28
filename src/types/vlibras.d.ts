import React from 'react'

declare global {
  namespace JSX {
    interface IntrinsicAttributes {
      [attr: string]: any
    }
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
  interface Window { VLibras?: any }
}
export {}
