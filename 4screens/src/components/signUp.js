import { BiUser } from 'react-icons/bi'
import { MdOutlineMailOutline } from 'react-icons/md'
import { GiPadlock } from 'react-icons/gi'
import {AiOutlineCheckCircle } from 'react-icons/ai'
import './css/signUp.scss'

export function SignUpScreen() {
    return (<>
        <div className="content">

            <form>
                <div className='check-icon'>
                    <AiOutlineCheckCircle/>
                </div>
                <h1>Sign Up</h1>
                
                <label><BiUser/><h3>Nombre:</h3>
                
                    <input type='text' placeholder='  escribe tu nombre'></input>
                </label>
                <label><MdOutlineMailOutline /><h3>Correo:</h3>
                    <input type='text'></input>
                </label>
                <label><GiPadlock /><h3>Contraseña:</h3>
                    <input type='password' ></input>
                </label>
                <button type="button">Sign Up</button>
                <h4>or <br /><a href='#'>Login</a></h4>
            </form>
        </div>

    </>
    );
}


