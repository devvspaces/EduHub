import '../styles/main.scss';
import {Helmet} from 'react-helmet'
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function Error () {
    let history = useNavigate();
    return (
        <>
            <Helmet>
                <title>EduHub | 404</title>
            </Helmet>

            <main className='error_404'>
                <Link href='/' className="pseudo_nav">EduHub</Link>
                <form> 
                    <div className="heading">
                        <header>Oops!</header>
                        <p>There's nothing here, sorry</p>
                    </div>
                </form>

                <p><Link onClick={() => history.goBack()}>Go Back <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M9 14L5 10L9 6" stroke="#32D583" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 10H16C17.0609 10 18.0783 10.4214 18.8284 11.1716C19.5786 11.9217 20 12.9391 20 14C20 15.0609 19.5786 16.0783 18.8284 16.8284C18.0783 17.5786 17.0609 18 16 18H15" stroke="#32D583" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></Link></p>                
            </main>
        
        </>
    )
}