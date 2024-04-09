/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Routes,Route } from 'react-router-dom'
import {  About, Contact, Donate, Education, Footer, Home, Navigation, Partnerships, Violence} from './components/index'
import { Blog,Register } from './pages';

const App = () => {
  return (

    <div className='app'>
<Navigation/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route  path='/about' element={<About/>}/>
          <Route  path='/contact' element={<Contact/>}/>
          <Route  path='/donate' element={<Donate/>}/>
          <Route  path='/violence' element={<Violence/>}/>
          <Route  path='/education' element={<Education/>}/>
          <Route  path='/partnerships' element={<Partnerships/>}/>
          <Route  path='/blog' element={<Blog/>}/>
          <Route  path='/register' element={<Register/>}/>
           
        </Routes>
        <Footer/>
    </div>
  )
}

export default App