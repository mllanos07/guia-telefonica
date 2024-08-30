import React, { useState, useEffect } from "react";
import axios from "axios";

function Tabla() {
  return (
    <div>
      <table>
        <colgroup span="5" className="columns"></colgroup>
        <thead>
          <tr>
            <th><b>Nombre:</b></th>
            <th><b>Apellido:</b></th>
            <th><b>Edad:</b></th>
            <th><b>Teléfono:</b></th>
            <th><b>Acciones:</b></th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.nombre}</td>
              <td>{user.apellido}</td>
              <td>{user.edad}</td>
              <td>{user.telefono}</td>
              <td>{}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Tabla;
