<<<<<<< HEAD
import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import {onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import {useDispatch, useSelector} from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { toggleGptSearchView} from "../utils/gptSlice";
import { clearSlice } from '../utils/gptSlice';
import { SUPPORTED_LANGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {

  const navigate = useNavigate(); 
  const user = useSelector(store => store.user);
  const dispatch = useDispatch();
  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);

  const handleSignOut = () => {

    signOut(auth).then(() => {
      
    }).catch((error) => {
      navigate("/error");
    });
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth , (user) => {
      if (user) {
        const {uid , email , displayName , photoURL} = user;
        dispatch(
          addUser(
            { uid:uid ,
              email : email,
              displayName : displayName,
              photoURL:photoURL
            }
          )
        );
        navigate("/browse");
      } 
      else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  } , []);

  const handleGPTSearchClick = () => {
    // Toggle GPT Search

    dispatch(toggleGptSearchView());

    if(showGPTSearch) {
      dispatch(clearSlice());
    }

  }

  const handleLanguageChange = (e) => {
    
    dispatch(changeLanguage(e.target.value));
  }


  return (
    <div className='absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-50 flex flex-col md:flex-row justify-between'>
        <img 
        className='w-48 mx-auto md:mx-0'
        src= {LOGO}
        alt='Logo'
        />
        
        {user &&
        (
          <div className='flex p-2 justify-between'>
            {showGPTSearch &&
             <select className='py-2 px-4 mx-4 my-2 h-10 bg-gray-900 text-white rounded-lg' onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value = {lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>}
            <button 
            className='py-2 px-4 mx-4 my-2 h-10 bg-white text-black rounded-lg opacity-90'
            onClick={handleGPTSearchClick}
            >{showGPTSearch ? "Home" : "GPT Search"}</button>
            <img className='hidden md:block w-10 h-10 rounded-3xl' alt='usericon' src={user?.photoURL} />
            <button onClick={handleSignOut} className='font-bold text-white'>
              (Sign Out)
            </button>
        </div>
        )}

    </div>
  )
}

export default Header;
=======
const Header = () => {
    return(
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-20">
            <img
                className="w-44"
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
                alt="logo"
            />

        </div>
    )
}

export default Header; 
>>>>>>> 252e979150bfb9acec20fd48628aed21fd0e3e29
