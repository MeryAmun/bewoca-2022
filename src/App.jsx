/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Routes,Route } from 'react-router-dom'
import {  About, Contact, Donate, Education, Footer, Home, Navigation, Partnerships, Violence} from './components/index'

const App = () => {
  return (

    <div className='app'>
<Navigation.default/>
        <Routes>
          <Route exact path='/' element={<Home.default/>}/>
          <Route  path='/about' element={<About.default/>}/>
          <Route  path='/contact' element={<Contact.default/>}/>
          <Route  path='/donate' element={<Donate.default/>}/>
          <Route  path='/violence' element={<Violence.default/>}/>
          <Route  path='/education' element={<Education.default/>}/>
          <Route  path='/partnerships' element={<Partnerships.default/>}/>

        </Routes>
        <Footer.default/>
    </div>
  )
}

export default App