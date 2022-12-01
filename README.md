# react-renderif-hoc
A React HOC for conditional rendering

## Install
`yarn add react-renderif-hoc`
or
`npm i react-renderif-hoc`

## Usage

```tsx
import { renderIf } from 'react-renderif-hoc'

function MyComponent_() {
  return <div>Hello world</div>
}

export const MyComponent = renderIf('show')(MyComponent_)
// or
export const MyAltComponent = renderIf(props => props.level > 1)(MyComponent_)
```
