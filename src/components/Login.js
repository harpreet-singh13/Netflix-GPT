import React, { useState } from 'react';
import Header from './Header'

const Login = () => {

    const [isSignInForm , setSignInForm] = useState(true);

    const toogleSignInForm = () => {
        setSignInForm(!isSignInForm);
    };


    return (
        <div>
            <Header/>
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                alt="" />
            </div>

            <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                { !isSignInForm && <input type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' />}
                <input type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' />
                <input type="password" placeholder='Password' className='p-4 my-4 w-full  bg-gray-700' />
                <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className='py-4 cursor-pointer' onClick={toogleSignInForm}>{isSignInForm ? 'New to Netflix? Sign up Now' : 'Already registered? Sign In Now'}</p>
            </form>
        </div>
    )
}

export default Login;