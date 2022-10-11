/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Routes,Route } from 'react-router-dom'
import {  Home, Navigation} from './components/index'

const App = () => {
  return (

    <div>
<Navigation.default/>
        <Routes>
          <Route exact path='/' element={<Home.default/>}/>

        </Routes>
    </div>
  )
}

export default App