/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Routes,Route } from 'react-router-dom'
import {  About, Footer, Home, Navigation} from './components/index'

const App = () => {
  return (

    <div className='App'>
<Navigation.default/>
        <Routes>
          <Route exact path='/' element={<Home.default/>}/>
          <Route  path='/about' element={<About.default/>}/>

        </Routes>
        <Footer.default/>
    </div>
  )
}

export default App