import React from 'react'
import { ComponentType, forwardRef } from 'react'

export function renderIf<T>(condition: keyof T | ((props: T) => any)) {
  return function <TW>(WrappedComponent: ComponentType<TW>) {
    const RenderIfComponent = (props: T & TW, ref: any) => {
      const shouldRender = typeof condition === 'function' ? condition(props) : !!props[condition]
      return shouldRender ? <WrappedComponent ref={ref} {...props} /> : null
    }

    const wrappedDisplayName = WrappedComponent.displayName || WrappedComponent.name || 'Component'
    RenderIfComponent.displayName = `RenderIf(${wrappedDisplayName})`

    return forwardRef(RenderIfComponent)
  }
}
