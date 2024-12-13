import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {signInWithGoogle}=useContext(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()
    const handleGoogleLogin=()=>{
        signInWithGoogle()
        .then(result=>{
            console.log('Login Complete with Google')
            navigate(location.state || "/")
        })
        .catch(err=>{
            console.log("Error : ",err)
        })
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className='btn w-full'>Google</button>
        </div>
    );
};

export default SocialLogin;