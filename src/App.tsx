import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Tooltip from './components/Tooltip'
import Toast from './components/Toast'

function App() {


  return (
    <div className="App">
      <Toast textHeader='Toast Check' text='deneme'/>
    </div>
  )
}

export default App
