import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./App.css";

export function Formulario() {
  const [nombre, setNombre] = useState();

  const formik = useFormik({
    initialValues: {
      apellidoPat: "",
      apellidoMat: "",
      nombres: "",
      telefono: "",
    },
    
    onSubmit: (v) => {
      console.log(v);
    },
    //validacion
    validationSchema: Yup.object({
      apellidoPat: Yup.string().required(),
      apellidoMat: Yup.string().required(),
      nombres: Yup.string().required("is required"),
      telefono: Yup.string().required("is required"),
    }),
  });
  if (!/[a-zA-Z]+/.test(formik.values.apellidoPat)) {
    formik.errors.apellidoPat = "escribe un apellido valido";
  } else formik.errors.apellidoPat = " ";

  if (!/[a-zA-Z]+/.test(formik.values.apellidoMat)) {
    formik.errors.apellidoMat = "escribe un apellido valido";
  } else formik.errors.apellidoMat = "";

  if (!/[a-zA-Z]+/.test(formik.values.nombres)) {
    formik.errors.nombres = "escribe un nombre valido";
  } else formik.errors.nombres = "";

  if (!/[a-zA-Z]+/.test(formik.values.telefono)) {
    formik.errors.telefono = "escribe un nombre valido";
  } else formik.errors.telefono = "";

  const borrar = () => {
    window.location.reload();
  };



  return (
    <form onSubmit={formik.handleSubmit} className="formulario">
      <h2>Registro</h2>
      <div className="inputs">
        <label id="apellidoPa">
          Apellido paterno:
          <br></br>
          <input type="text" placeholder="escribe" name="apellidoPat"></input>
        </label>
        <label className="errors">{formik.errors.apellidoPat}</label>

        <br></br>

        <label>
          Apellido Materno:
          <br></br>
          <input type="text" name="apellidoMat"></input>
        </label>
        <label className="errors">{formik.errors.apellidoMat}</label>

        <label>
          Nombres(s):<br></br>
          <input type="text" name="nombres"></input>
        </label>
        <label className="errors">{formik.errors.nombres}</label>

        <label>
          Telefono:<br></br>
          <input type="text" name="telefono"></input>
        </label>
        <label className="errors">{formik.errors.telefono}</label>
      </div>
      <button type="submit">Enviar</button>
      <button type="button" className="btn-cancel" onClick={borrar}>
        Cancelar
      </button>
    </form>
  );
}
