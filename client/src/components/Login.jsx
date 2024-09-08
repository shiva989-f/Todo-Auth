import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import { signIn } from 'next-auth/react'


const Login = () => {
    return (
        <div className="login-container">
            <button className="sign-in-google" onClick={()=> signIn("google")}><FcGoogle size={30}/>Sign In With Google</button>
        </div>
    )
}

export default Login
