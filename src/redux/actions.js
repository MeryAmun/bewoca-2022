import * as action from "./constants"
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db,auth } from "../firebaseConfig";


export const getAllPosts = () => async (dispatch) => {
    try {
   
      dispatch({ type: action.START_LOADING})
      const data = query(
        collection(db, "apartments"),
        orderBy("timestamp", "desc")
      );
      const getData = async () => {
        await onSnapshot(data, (querySnapshot) => {
          const newData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
          //console.log(newData)
          dispatch({ type: action.GET_ALL_POSTS, payload:newData })
        })
      }
     getData()
     dispatch({ type: action.END_LOADING})
     

    } catch (error) {
      console.log(error)
    }
  }







  // ===========================AUTHENTICATION ACTIONS======================================



  export const signInAction = ((formData, navigate) =>  (dispatch) => {

    try {
      dispatch({ type: action.START_LOADING})
      const { email, password } = formData;
    signInWithEmailAndPassword(auth, email,password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential?.user;
          // ...
          dispatch({ type: action.LOG_IN_USER, payload: user })
        
          dispatch({ type: action.END_LOADING})
          navigate('/')
        })
        .catch((error) => {
          const errorMessage = error.message;
          dispatch({ type: action.SET_LOGIN_MESSAGE, payload: errorMessage })
        });
       
    } catch (error) {
      console.log(error)
    }
  }
  )