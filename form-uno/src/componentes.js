
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup"

function Formulario() {
    const [nombre, setNombre] = useState()

    const formik = useFormik({
        initialValues: {
            apellidoPat: '',
            apellidoMat: '',
            nombres: '',
            edad: '',
            correo: '',
            telefono: '',
            sexo: '',
            direccion: '',
            cp: '',
            password: '',
            nacionalidad: '',
        },
        onSubmit: (v) => {
            console.log(v)
        },
        //validacion
        validationSchema: Yup.object({
            apellidoPat: Yup.string().required(),
            apellidoMat: Yup.string().required(),
            nombres: Yup.string().required('is required'),
            edad: Yup.number().required(),
            correo: Yup.string().email(),
            telefono: Yup.number().required(),
            sexo: Yup.string().required(),
            direccion: Yup.string(),
            cp: Yup.number().required(),
            nacionalidad: Yup.string().required(),

        })
    })


    const borrar = () => {
        window.location.reload()

    }

    return (
        <>
            <form onSubmit={formik.handleSubmit} className="formulario" >
                <h2>Registro</h2>
                <div className="inputs">

                    <label id="apellidoPa">Apellido paterno:
                        <br></br><input type="text" placeholder="escribe" name="apellidoPat"></input></label>

                    <label >Apellido Materno:
                        <br></br><input type="text" name="apellidoMat"></input></label>

                    <label >Nombres(s):<br></br><input type="text" name="nombres"></input></label>

                    <label >Edad:<br></br><input type="text" name="edad"></input></label>

                    <label >Correo:<br></br><input type="text" name="correo"></input></label>

                    <label >Telefono:<br></br><input type="text" name="telefono"></input></label>

                    <label >Sexo:<br></br>
                        <input type="radio" name="sexo" value='hombre' >
                        </input> Hombre
                        <br></br>
                        <input type="radio" value="mujer" name="sexo" >
                        </input> Mujer
                    </label>
                    <label >Direccion:<br></br><input type="text" name="direcccion"></input></label>

                    <label >Cp:<br></br><input type="text" name="cp"></input></label>

                    <label>Contraseña:<br></br><input type="password" name="pass"></input></label>

                    <label >Nacionalidad:<br></br><input type="text" name="nacionalidad" ></input></label>

                </div>
                <button type="submit">Enviar</button>
                <button type="button" className="btn-cancel" onClick={borrar}>Cancelar</button>
            </form>
        </>
    )


}

function Contador() {
    const [count, setCount] = useState(0);

    function sumar() {

        setCount(count + 1)
    };
    function restar() {

        setCount(count - 1)
        return count
    };

    return (
        <>
            <div className='contador'>
                <h2>Contador</h2>
                <h1 className='h1-cont'>{count}</h1>
                <button onClick={sumar}>Aumentar</button>
                <button onClick={restar}>restar</button>

            </div>
        </>
    )


}

export default { Formulario, Contador}
