import React from 'react'
import MyComponent from './assets/MyComponent'
import {ErrorBoundary } from 'react-error-boudary'
import ErrorFallback from './assets/ErrorFallback'

function App() {
  return (
    <div>
      <ErrorBoundary FallbackComponent ={ErrorFallback}>
        <MyComponent/>
        </ErrorBoundary>
    </div>
  )
}

export default App
