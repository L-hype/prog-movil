
import {AiOutlineCheckCircle} from 'react-icons/ai'

export function ResetScreen(){
    const h3Style = {marginBottom:"2%"}
    return(<>
    <div className="content">
        <form>
        <div className='check-icon'>
                    <AiOutlineCheckCircle/>
                </div>
                <h1>Reset password</h1>
                
            <label ><h3 style={h3Style}>password:</h3>
            <input type="text" ></input>
            </label>
            <label><h3 style={h3Style}>New password:</h3>
            <input type="password"></input>
            </label>
            <label><h3>Confirm password:</h3>
            <input type="text"></input>
            </label>
            <button type="button" style={{height:'50%'}}
            
            >Reset</button>

        </form>

    </div>


        </>
    )
}