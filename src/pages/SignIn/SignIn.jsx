import React, { useContext } from 'react';
import registerLotte from "../../assets/lotte/loginlotte.json"
import Lottie from 'lottie-react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import SocialLogin from '../Shared/SocialLogin';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const {signInUser}=useContext(AuthContext)
    const location=useLocation()
    const navigate=useNavigate()
    const handleSignIn=(e)=>{
        e.preventDefault()
        const form =e.target
        const email=form.email.value
        const password=form.password.value
        console.log(email,password)

        signInUser(email,password)
        .then(result=>{
            console.log(result.user)
            navigate(location.state )
        })
        .catch(err=>{
            console.log("Error : ",err)
        })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96">
           
            <Lottie animationData={registerLotte}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSignIn}>
            <h1 className="text-center text-5xl font-bold">Sign In now!</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="text-center   p-2">
            <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SignIn;