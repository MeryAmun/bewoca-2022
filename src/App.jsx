/* eslint-disable react/jsx-pascal-case */
import React,{ useState,useEffect } from 'react';
import { Routes,Route } from 'react-router-dom'
import {  About, Contact, Donate, ProtectedRoute,Education, Footer, Home, Navigation, Partnerships, Violence} from './components/index'
import { Blog,Login, Profile,CreateEvent,EditEvent } from './pages';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig';


const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser?.displayName);
      } else {
        setUser(null);
      }
    });
  }, []);


  return (
    <div className='app'>
<Navigation user={user}/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route  path='/about' element={<About/>}/>
          <Route  path='/contact' element={<Contact/>}/>
          <Route  path='/donate' element={<Donate/>}/>
          <Route  path='/violence' element={<Violence/>}/>
          <Route  path='/education' element={<Education/>}/>
          <Route  path='/partnerships' element={<Partnerships/>}/>
          <Route  path='/blog' element={<Blog/>}/>
          <Route  path='/login' element={<Login/>}/>
          <Route element={<ProtectedRoute user={user}/>}>
          <Route  path='/profile/:name' element={<Profile user={user}/>}/>
          <Route  path='/create-event' element={<CreateEvent/>}/>
          <Route  path='/event/:id' element={<EditEvent/>}/>
           </Route>
        </Routes>
        <Footer user={user}/>
    </div>
  )
}

export default App