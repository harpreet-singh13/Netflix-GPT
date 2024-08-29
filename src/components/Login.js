import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import {useDispatch} from "react-redux";
import { addUser } from '../utils/userSlice';
import { BG_URL, photoURL } from '../utils/constants';

const Login = () => {

  const [isSignedInForm , setIsSignedInForm ] = useState(true);
  const [errorMessage , setErrorMessage] = useState(null);
  
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);



  const toggleSignInForm = () => {
    setIsSignedInForm(!isSignedInForm);
  }

  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidData(email.current.value , password.current.value);
    setErrorMessage(message);
    if(message) return;

    if (!isSignedInForm) {
      // SignUp Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
           photoURL: "https://avatars.githubusercontent.com/u/60479532?v=4"
        }).then(() => {
          const {uid , email , displayName , photoURL} = auth.currentUser;
          dispatch(
            addUser(
              { uid:uid ,
                email : email,
                displayName : displayName,
                photoURL:photoURL
              }
            ));
        }).catch((error) => {
          setErrorMessage(error.message);
        });

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + '-' + errorMessage);
        
      });

    }
    else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + '-' + errorMessage);
      });

    }

  }


  return (
    <>
    <Header/>
    <div className='absolute' >
        <img className='object-cover' src = {BG_URL} alt='Logo'/>
    </div>
    
    <form 
    onSubmit={(e) =>e.preventDefault()}
    className='w-full md:w-3/12 absolute p-10 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'
    >
      <h1 className='font-bold text-3xl py-4'>
       {isSignedInForm ? 'Sign In' : 'Sign Up'}
      </h1>

      {!isSignedInForm && <input
       type="text"
       ref={name}
       placeholder='Full Name' 
       className='p-3 my-3 w-full bg-gray-700'
       />}

      <input type="text"
      ref={email}
       placeholder='Email Address' 
       className='p-3 my-3 w-full bg-gray-700'
       />
      <input
      ref = {password}
       type="password" 
       placeholder='Password' 
       className='p-3 my-3 w-full bg-gray-700'
       />
      <button 
        className='p-3 my-3 bg-red-700 w-full rounded-lg'
        onClick={handleButtonClick}>
        {isSignedInForm ? 'Sign In' : 'Sign Up'}
      </button>
      <p className='font-semibold py-2 text-red-700'>{errorMessage}</p>
      <p
       className='py-3 cursor-pointer'
       onClick={toggleSignInForm}>
        {isSignedInForm ? 'New to Netflix? Sign Up Now' : 'Already Registered User? Sign In Now '}
        
      </p>
    </form>
    </>
  )
}

export default Login;