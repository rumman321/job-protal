import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';

const SocialLogin = () => {
    const {signInWithGoogle}=useContext(AuthContext)
    const handleGoogleLogin=()=>{
        signInWithGoogle()
        .then(result=>{
            console.log('Login Complete with Google')
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