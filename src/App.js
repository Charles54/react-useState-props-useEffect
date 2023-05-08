import React from 'react'
import Car from './components/Car'
import Fetch from './components/Fetch'
import FetchUsers from './components/FetchUsers'

const App = () => {
  return (
    <div>
      <Car brand='Toyota' color = 'Red'/>
      <Car brand='Lexus' color = 'Black'/>
      <Car brand='Mercedes' color = 'Green'/>

      <Fetch />
      <FetchUsers />
    </div>
  )
}

export default App