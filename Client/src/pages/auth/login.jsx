import React, { useState } from "react";
import loginimg from '../../../public/login.svg'
import Image from "next/image";
import googleimg from '../../../public/google.png'
import appleimg from '../../../public/apple.png'
import { useRouter } from "next/router";
import instance from "../../Helpers/Config/axios.config";
import { toast } from "react-toastify";

export default function Login() {
    let router = useRouter()
    let [email,setEmail] = useState();
    let [pwd,setpwd] = useState();
    
    const handleLogin = async(e)=>{
        e.preventDefault()
        await instance.post('/auth/login',{email,pwd})
        .then((response)=>{
            if(response.status===200){
                toast("Login sucess")
                router.push('/')
            }else{
                toast(response.data.msg)
            }
        })
        .catch((err)=>{
            console.log(err)
            toast.error("Error occured")
        })
    }

  return (
    <>
      <div className="dropbox-content max-w-xl mx-auto flex">
        <div className="dropbox-content__img w-half flex justify-center items-center">
          <Image height={450} src={loginimg} alt="Login Image" />
        </div>
        <div className="dropbox-content__form w-half">
          <form className="flex flex-col">
            <div className="form__header flex justify-between">
              <h5>Sign In</h5>
              <p>or <a onClick={()=>router.push('/auth/register')}>create an account</a></p>
            </div>
            <div className="flex flex-col form__btn">
              <button className="form__btn-social form__btn-social--google">
                <span className="form__border flex justify-center items-center">
                  <Image  src={googleimg} style={{ height: "1rem", width: "1rem" }} alt="" />
                </span>
                <span className="form__caption">Sign in with Google</span>
              </button>
              <button className="form__btn-social form__btn-social--apple">
                <span className="form__border flex justify-center items-center">
                  <Image src={appleimg}  style={{ height: "1rem", width: "1rem",filter:'invert(1)' }} alt="" />
                </span>
                <span className="form__caption">Sign in with Apple</span>
              </button>
            </div>
            <div className="form__liners flex justify-center items-center">
              <span className="form__line"></span>
              <span className="form__line--caption">or</span>
              <span className="form__line"></span>
            </div>

            <div className="flex flex-col form__input-group">
              <input onChange={(e)=>setEmail(e.target.value)}  type="email" className="form__input form__input--email" placeholder="Email" />
              <input onChange={(e)=>setpwd(e.target.value)} type="password" className="form__input form__input--password" placeholder="Password" />
            </div>

            <div className="form__submit flex items-center justify-between">
              <div className="flex">
                <input type="checkbox" className="form__checklist" id="remember" />
                <label htmlFor="remember" className="form__label">Remember me</label>
              </div>
              <button onClick={(e)=>handleLogin(e)} className="form__btn-submit">Sign in</button>
            </div>
            <a href="#" className="form__forgot">Forgot Password</a>
            <p className="form__mobile">( or <a href="#"> create an account </a> )</p>
            <p className="form__notes">
              This page is protected by reCAPTCHA, and subject to the Google <a href="">Privacy Policy</a> and
              <a href="#">Terms of service</a>.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

