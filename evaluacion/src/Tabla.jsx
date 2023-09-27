
export function Tabla({ info }) {
  
  return(
    <div>
   <table>
      <thead>
        <tr>
          <th>Apellido Paterno</th>
          <th>Apellido Materno</th>
          <th>Nombres</th>
          <th>Teléfono</th>
        </tr>
      </thead>
      <tbody>
        {info.map((info, index) => (
          <tr key={index}>
            <td>{info.apellidoPat}</td>
            <td>{info.apellidoMat}</td>
            <td>{info.nombres}</td>
            <td>{info.telefono}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  )
  
}
