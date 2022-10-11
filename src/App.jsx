/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Routes,Route } from 'react-router-dom'
import {  Footer, Home, Navigation} from './components/index'

const App = () => {
  return (

    <div>
<Navigation.default/>
        <Routes>
          <Route exact path='/' element={<Home.default/>}/>

        </Routes>
        <Footer.default/>
    </div>
  )
}

export default App