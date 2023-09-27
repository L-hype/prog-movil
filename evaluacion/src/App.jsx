import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";
import { Tabla } from "./Tabla";

export function Formulario(props) {
  const prueba = [4, 4, 3, 2, 2];
  const [info, setInfo] = useState({
    apellidoPat: "",
    apellidoMat: "",
    nombres: "",
    telefono: "",
  });

  const data = [];

  const formik = useFormik({
    initialValues: {
      apellidoPat: "",
      apellidoMat: "",
      nombres: "",
      telefono: "",
    },

    onSubmit: (values) => {
      data.push(values);
      console.log(data[1]);
    },
    //validacion
    validationSchema: Yup.object({
      apellidoPat: Yup.string().required(),
      apellidoMat: Yup.string().required(),
      nombres: Yup.string().required(),
      telefono: Yup.number().required(),
    }),
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="formulario">
        <h2>Registro{data[0]}</h2>
        <div className="inputs">
          <label id="apellidoPa">
            Apellido paterno:
            <br></br>
            <input
              type="text"
              placeholder="Hernandez"
              name="apellidoPat"
              value={formik.values.apellidoPat}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></input>
          </label>
          <label className="errors">
            {formik.touched.apellidoPat ? formik.errors.apellidoPat : ""}
          </label>

          <br></br>

          <label>
            Apellido Materno:
            <br></br>
            <input
              type="text"
              name="apellidoMat"
              value={formik.values.apellidoMat}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></input>
          </label>
          <label className="errors">
            {formik.touched.apellidoMat ? formik.errors.apellidoMat : ""}
          </label>

          <label>
            Nombres(s):<br></br>
            <input
              type="text"
              name="nombres"
              value={formik.values.nombres}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></input>
          </label>
          <label className="errors">
            {formik.touched.nombres ? formik.errors.nombres : ""}
          </label>

          <label>
            Telefono:<br></br>
            <input
              type="text"
              name="telefono"
              value={formik.values.telefono}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            ></input>
          </label>
          <label className="errors">
            {formik.touched.telefono ? formik.errors.telefono : ""}
          </label>
        </div>
        <button type="submit">Enviar</button>
        <button type="button" className="btn-cancel" onClick={formik.resetForm}>
          Cancelar
        </button>
      </form>
      <h5>
        {data.map((d) => {
          return <h3>{d.nombres}hola</h3>;
        })}
      </h5>


     
      <Tabla info={data}></Tabla>
    </>
  );
}
