import '../styles/main.scss';
import {Helmet} from 'react-helmet'
import { Link } from 'react-router-dom';
import { Button } from '../components';
import Notiflix from 'notiflix'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ForgotPassword () {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    function resetInput () {
        let inputs = document.getElementsByTagName("input")
        inputs[0].style.border = "1px solid #D0D5DD"
    }
    
    const formStub = async (e) => {
    
        e.preventDefault();
        const SIGN_IN_API = ""
    
        let email = document.getElementById("email").value
        
        e.preventDefault();
        const response = {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
          },
          body: JSON.stringify({
              "email": email,
          })
      }
      let inputs = document.getElementsByTagName("input")

        if (email.match(validRegex)) {
            Notiflix.Notify.success("Reset Link Sent")
            localStorage.setItem('reset_token', JSON.stringify(btoa(email)));
            window.location.assign("/reset-password#" + btoa(email))
        
            // let success = await fetch(SIGN_IN_API, response)
        } else if (!email) {
            Notiflix.Notify.failure("Please input email")
            inputs[0].style.border = "1px solid red"
            inputs[1].style.border = "1px solid #D0D5DD"
        }
    
    }

    let navigate = useNavigate();


    return (
        <>
            <Helmet>
                <title>EduHub | Forgot Password</title>
            </Helmet>

            <main className='forgot_password'>
                <Link href='/' className="pseudo_nav">EduHub</Link>
                <form> 
                    <div className="heading">
                        <header>Forgot your Password?</header>
                        <p>Fill in your account's email and we'll send a reset link</p>
                    </div>

                    <div className="login">
                        <fieldset className="input_fields">
                        <label htmlFor='email'>Email</label>
                        <input onChange={resetInput} id='email' type='email' placeholder='Enter your account email' required/>
                        <span id="error_msg">Please enter a valid email</span>

                        </fieldset>

                        <Button onClick={formStub}>Send Reset Link</Button>
                        <p><Link disabled style={{ justifyContent: 'center', pointerEvents: 'none', color: 'gray' }} onClick={formStub} className="goback">Resend reset link <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 16H5v5m9-13h5V3M4.583 9.003a8 8 0 0 1 14.331-1.027m.504 7.021a8 8 0 0 1-14.332 1.027"/></svg></Link></p>                          
                    </div>

                </form>

                <p><Link to="/login" className="goback">Go Back <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 14L5 10L9 6" stroke="#32D583" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 10H16C17.0609 10 18.0783 10.4214 18.8284 11.1716C19.5786 11.9217 20 12.9391 20 14C20 15.0609 19.5786 16.0783 18.8284 16.8284C18.0783 17.5786 17.0609 18 16 18H15" stroke="#32D583" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></Link></p>                          
            </main>
        
        </>
    )
}