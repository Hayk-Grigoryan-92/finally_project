import { Link } from 'react-router-dom'
import './style.scss'
import { routerPage } from '../../routes'

export const Login = () => {

    return (
        <div className='login'>
            <div className='loginContainer'>
                <div>
                    <label>
                        <input type="email" placeholder='Enteryour e-mail'/>
                    </label>
                </div>
                <div>
                    <label>
                        <input type="password" placeholder='Enter your password'/>
                    </label>
                </div>
                <h4><Link>Forgot password ?</Link></h4>
                <button>Login</button>
                <h3>Don't have an account ? 
                    <Link to={routerPage.REGISTRATION}>Sign Up</Link>
                </h3>
            </div>
        </div>
    )
}