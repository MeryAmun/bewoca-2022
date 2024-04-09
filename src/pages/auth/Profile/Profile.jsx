import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { Link } from 'react-router-dom'
import './profile.css'
import { auth } from '../../../firebaseConfig' 


const Profile = ({user}) => {
  const [loading, setLoading] = useState(false);

  /**===============LOGOUT=================== */
  const logOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };



  return (
    <div className="profile__container">
      <button className='profile__button'
onClick={logOut}>
        LOGOUT
      </button>
<div className="profile__dashboard">
<Link to='/add-friend' className='profile__link'>
        ADD NEW FRIEND
      </Link>
      <Link to='/create-event' className='profile__link'>
        ADD NEW EVENT
      </Link>
<Link to='/add-to-gallery' className='profile__link'>
        ADD TO GALLERY
      </Link>


</div>
      {/* ==========USER DETAILS============= */}
     <form className="body">
  <div className="">
  <div className="form-group">
  <span>Username: {user} </span>
     </div>
     {/* <div className="form-group">
     <span>Created Account on: {joinedOn}</span>
     </div> */}
     <div className="form-group">

     </div>
  </div>
</form>
    </div>
  )
}

export default Profile