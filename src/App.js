import React from 'react'
import Car from './components/Car'
import Fetch from './components/Fetch'
import FetchUsers from './components/FetchUsers'
import FetchPhoto from './components/FetchPhoto'
import  './App.css'

const App = () => {
  return (
    <div>
      {/* <Car brand='Toyota' color = 'Red'/>
      <Car brand='Lexus' color = 'Black'/>
      <Car brand='Mercedes' color = 'Green'/>

      <Fetch />
      <FetchUsers /> */}

      <div className='image'>
      <FetchPhoto />
      </div>
    </div>
  )
}

export default App