import '../styles/main.scss';
import {Helmet} from 'react-helmet'
import { Link, json } from 'react-router-dom';
import { Button } from '../components';
import Notiflix from 'notiflix'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ResetPassword () {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    function resetInput () {
        let inputs = document.getElementsByTagName("input")
        inputs[0].style.border = "1px solid #D0D5DD"
    }
    
    const formStub = async (e) => {
    
        e.preventDefault();
        const SIGN_IN_API = ""
    
        let password = document.getElementById("password").value
        
        e.preventDefault();
        const response = {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
          },
          body: JSON.stringify({
              "password": password,
          })
      }
      let inputs = document.getElementsByTagName("input")

      
      
        if (password) {
            Notiflix.Notify.success("Reset Successful")
            Notiflix.Loading.standard("Login to your account")
            localStorage.setItem('password', JSON.stringify(btoa(password)));

            setTimeout(() => {
                window.location.assign("/login")
            }, 3000);
        
            // let success = await fetch(SIGN_IN_API, response)
        } else if (!password) {
            Notiflix.Notify.failure("Please input email")
            inputs[0].style.border = "1px solid red"
            inputs[1].style.border = "1px solid #D0D5DD"
        }
    
    }

    let navigate = useNavigate();
    
    useEffect(() => {
        let reset_token_email = window.location.hash.substring(1)
        let reset_token_api = JSON.parse(localStorage.getItem("reset_token"))
    
        if (reset_token_email == reset_token_api) {
            return
        }

        else {
            window.location.assign("/forgot-password")
        }
      
    }, [])
    


    return (
        <>
            <Helmet>
                <title>EduHub | Reset Password</title>
            </Helmet>

            <main className='forgot_password'>
                <Link href='/' className="pseudo_nav">EduHub</Link>
                <form> 
                    <div className="heading">
                        <header>Reset Password</header>
                        <p>Type in your new password and confirm it</p>
                    </div>

                    <div className="login">
                        <fieldset className="input_fields">
                            <label htmlFor='password'>New Password</label>
                            <input onChange={resetInput} id='password' type='password' placeholder='********' required />
                        </fieldset>

                        <fieldset className="input_fields">
                            <label htmlFor='password'>Confirm New Password</label>
                            <input onChange={resetInput} id='password' type='password' placeholder='********' required />
                        </fieldset>

                        <Button onClick={formStub}>Reset password</Button>
                    </div>

                </form>
            </main>
        
        </>
    )
}