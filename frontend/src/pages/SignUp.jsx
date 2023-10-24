import '../styles/main.scss';
import {Helmet} from 'react-helmet'
import { Link } from 'react-router-dom';
import { Button } from '../components';
import Notiflix from 'notiflix'
import { useEffect } from 'react';

export default function SignUp () {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    function resetInput () {
        let inputs = document.getElementsByTagName("input")
        inputs[0].style.border = "1px solid #D0D5DD"
        inputs[1].style.border = "1px solid #D0D5DD"
    }
    
    const formStub = async (e) => {
    
        e.preventDefault();
        const SIGN_IN_API = ""
    
        let email = document.getElementById("email").value
        let password = document.getElementById("password").value    
        
        e.preventDefault();
        const response = {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
          },
          body: JSON.stringify({
              "email": email,
              "password": password
          })
      }
      let inputs = document.getElementsByTagName("input")

      if (email.match(validRegex) && password) {
        Notiflix.Notify.success("Sign up successful")
        localStorage.setItem('user', JSON.stringify("login valid"));

        Notiflix.Loading.standard("Welcome to Eduhub")

        setTimeout(() => {
            window.location.assign("/dashboard")
        }, 3000);
    
        // let success = await fetch(SIGN_IN_API, response)
    } else if (!email && password) {
        Notiflix.Notify.failure("Please input email")
        inputs[0].style.border = "1px solid red"
        inputs[1].style.border = "1px solid #D0D5DD"
    } else if (!password && email) {
        Notiflix.Notify.failure("Please input password")
        inputs[0].style.border = "1px solid #D0D5DD"
        inputs[1].style.border = "1px solid red"


    } else {
        inputs[0].style.border = "1px solid red"
        inputs[1].style.border = "1px solid red"
        Notiflix.Notify.failure("Please input email and password")
    }
    
    }

    return (
        <>
            <Helmet>
                <title>EduHub | Sign Up</title>
            </Helmet>

            <main>
                <Link href='/' className="pseudo_nav">EduHub</Link>
                <form> 
                    <div className="heading">
                        <header>Welcome to EduHub</header>
                        <p>Sign up to create your account</p>
                    </div>

                    <div className="login">
                        <fieldset className="input_fields">
                        <label htmlFor='email'>Email</label>
                        <input onChange={resetInput} id='email' type='email' placeholder='Email Address' required/>
                        <span id="error_msg">Please enter a valid email</span>

                        </fieldset>

                        <fieldset className="input_fields">
                        <label htmlFor='password'>Password</label>
                        <input onChange={resetInput} id='password' type='password' placeholder='********' required />
                        </fieldset>

                        <Button onClick={formStub}>Sign Up</Button>
                    </div>

                    <div className="auth">
                        <span>OR</span>
                        <div>
                        {/* <Link href='#'>Sign in with Github <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 0C6.265 0 0 6.265 0 14C0 20.195 4.0075 25.4275 9.5725 27.2825C10.2725 27.405 10.535 26.985 10.535 26.6175C10.535 26.285 10.5175 25.1825 10.5175 24.01C7 24.6575 6.09 23.1525 5.81 22.365C5.6525 21.9625 4.97 20.72 4.375 20.3875C3.885 20.125 3.185 19.4775 4.3575 19.46C5.46 19.4425 6.2475 20.475 6.51 20.895C7.77 23.0125 9.7825 22.4175 10.5875 22.05C10.71 21.14 11.0775 20.5275 11.48 20.1775C8.365 19.8275 5.11 18.62 5.11 13.265C5.11 11.7425 5.6525 10.4825 6.545 9.5025C6.405 9.1525 5.915 7.7175 6.685 5.7925C6.685 5.7925 7.8575 5.425 10.535 7.2275C11.655 6.9125 12.845 6.755 14.035 6.755C15.225 6.755 16.415 6.9125 17.535 7.2275C20.2125 5.4075 21.385 5.7925 21.385 5.7925C22.155 7.7175 21.665 9.1525 21.525 9.5025C22.4175 10.4825 22.96 11.725 22.96 13.265C22.96 18.6375 19.6875 19.8275 16.5725 20.1775C17.08 20.615 17.5175 21.455 17.5175 22.7675C17.5175 24.64 17.5 26.145 17.5 26.6175C17.5 26.985 17.7625 27.4225 18.4625 27.2825C21.2418 26.3443 23.6568 24.5581 25.3677 22.1753C27.0786 19.7926 27.9993 16.9334 28 14C28 6.265 21.735 0 14 0Z" fill="black"/></svg></Link> */}
                        <Link href='#'>Sign up with Google <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4"/><path d="M16.2863 30C20.1434 30 23.3814 28.7555 25.7466 26.6089L21.2386 23.1865C20.0323 24.011 18.4132 24.5865 16.2863 24.5865C12.5086 24.5865 9.30225 22.1444 8.15929 18.7688L7.99176 18.7827L3.58208 22.1272L3.52441 22.2843C5.87359 26.8577 10.699 30 16.2863 30Z" fill="#34A853"/><path d="M8.16013 18.7689C7.85855 17.8978 7.68401 16.9644 7.68401 16C7.68401 15.0355 7.85855 14.1022 8.14426 13.2311L8.13627 13.0455L3.67132 9.64736L3.52524 9.71546C2.55703 11.6133 2.00146 13.7444 2.00146 16C2.00146 18.2555 2.55703 20.3866 3.52524 22.2844L8.16013 18.7689Z" fill="#FBBC05"/><path d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z" fill="#EB4335"/></svg></Link> 
                        {/* <Link href='#'>Sign in with SSO <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none"><path d="M23.1667 11.9999C23.1666 11.3175 22.9063 10.6351 22.3856 10.1144C21.8649 9.59368 21.1825 9.33333 20.5 9.33333M20.5 20C24.9183 20 28.5 16.4183 28.5 12C28.5 7.58172 24.9183 4 20.5 4C16.0817 4 12.5 7.58172 12.5 12C12.5 12.3649 12.5244 12.7241 12.5717 13.076C12.6496 13.6549 12.6885 13.9443 12.6623 14.1275C12.635 14.3182 12.6003 14.421 12.5063 14.5892C12.416 14.7507 12.2569 14.9097 11.9388 15.2278L5.12484 22.0418C4.89424 22.2724 4.77894 22.3877 4.69648 22.5223C4.62337 22.6416 4.5695 22.7716 4.53684 22.9077C4.5 23.0611 4.5 23.2242 4.5 23.5503V25.8667C4.5 26.6134 4.5 26.9868 4.64532 27.272C4.77316 27.5229 4.97713 27.7268 5.22801 27.8547C5.51323 28 5.8866 28 6.63333 28H9.83333V25.3333H12.5V22.6667H15.1667L17.2722 20.5612C17.5903 20.2431 17.7493 20.084 17.9108 19.9937C18.079 19.8997 18.1818 19.865 18.3725 19.8377C18.5557 19.8115 18.8451 19.8504 19.424 19.9283C19.7759 19.9756 20.1351 20 20.5 20Z" stroke="#32D583" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></Link> */}

                        </div>
                    </div>

                </form>

                <p>Already have an account? <Link to='/login'>Sign In</Link></p>                
            </main>
        
        </>
    )
}