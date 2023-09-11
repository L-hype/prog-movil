import { AiOutlineCheckCircle } from 'react-icons/ai'

export function LogInScreen() {
    return (
        <>
            <div className="content">


                <form>  
                     <div className='check-icon'>
                    <AiOutlineCheckCircle />
                </div>
                    <h1>Log in</h1>
                    <label><h3>User name</h3>
                        <input type="text" placeholder="escribe tu user name"></input>
                    </label>
                    <label><h3>password:</h3>
                        <input type="password"></input>
                    </label>

                    <button type="button">Sign Up</button>

                </form>
            </div>

        </>
    );
}

