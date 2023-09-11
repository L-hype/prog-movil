import { AiOutlineCheckCircle } from 'react-icons/ai'
import { MdOutlineMailOutline  } from 'react-icons/md'
import {useFormik} from 'formik'
import * as Yup from 'yup'

export function ForgotPassScreen() {

    const formik = useFormik({
        initialValues:{       
            correo:"",     
        },
        validationSchema: Yup.object({
            email:
            Yup.string().
            required("email is required"),
        }),
        
    })
    

    return (
        <>
            <div className='content'>
                <form >
                    <div className='check-icon'>
                        <AiOutlineCheckCircle />
                    </div>
                    <h1>Forgot password</h1>
                    
                    <label><MdOutlineMailOutline /><h3>Email:</h3>
                        <input 
                        type='text' placeholder='  escribe tu coreo' 
                        onChange={formik.handleChange}></input>
                    </label>
                    <button type="button" className='btn-f-pass'>send</button>
                    <h4> <a href='#'>Login</a></h4>
                </form>


            </div>

        </>
    )

}