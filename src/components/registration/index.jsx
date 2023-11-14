import { routerPage } from '../../routes'
import './style.scss'
import { Link } from 'react-router-dom'

export const Registration = () => {

    return (
        <div className='registration'>
        <div className='registrationContainer'>
            <div>
                <label>
                    <input type="email" placeholder='Email'/>
                </label>
            </div>
            <div>
                <label>
                    <input type="password" placeholder='Create a password'/>
                </label>
            </div>
            <div>
                <label>
                    <input type="password" placeholder='Confirm your password'/>
                </label>
            </div>
            <button>Sign Up</button>
            <h3>Alredy have an account ? 
                <Link to={routerPage.LOGIN}>Login</Link>
            </h3>
        </div>
    </div>
    )
}