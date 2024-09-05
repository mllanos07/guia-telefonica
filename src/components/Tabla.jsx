import React from "react";
import axios from "axios";

function Tabla({ userData, onDelete }) {
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/usuarios/${id}`)
      .then(function (response) {
        console.log(`Se borró el usuario con el id: ${id}`);
        onDelete();
      })
      .catch(function (error) {
        console.log("No se pudo borrar", error);
      });
  };

  return (
    <div>
      <table>
        <colgroup span="5" className="columns"></colgroup>
        <thead>
          <tr>
            <th>
              <b>Nombre:</b>
            </th>
            <th>
              <b>Apellido:</b>
            </th>
            <th>
              <b>Edad:</b>
            </th>
            <th>
              <b>Teléfono:</b>
            </th>
            <th>
              <b>Acciones:</b>
            </th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => (
            <tr key={user.id}>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.edad}</td>
              <td>{user.telefono}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Borrar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
