import React, { useState } from "react";
import axios from "axios";

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    telefono: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      if (formData.apellido.length < 4) {
        throw new Error("Apellido debe tener al menos 4 caracteres");
      }
      if (formData.nombre.length < 4) {
        throw new Error("Nombre debe tener al menos 4 caracteres");
      }
      if (parseInt(formData.edad) >= 120) {
        throw new Error("Edad debe ser menor a 120");
      }
      const phoneRegex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
      if (!phoneRegex.test(formData.telefono)) {
        throw new Error("Telefono debe tener 10 caracteres en formato válido");
      }

      axios
        .post("http://localhost:3000/usuarios", formData)
        .then(function (response) {
          window.alert(`Se ha creado el usuario ${formData.nombre}`);
          onSubmit();
        })
        .catch(function (error) {
          console.log("No se cargo el usuario");
        });
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="apellido">Apellido:</label>
          <input
            type="text"
            id="apellido"
            name="apellido"
            value={formData.apellido}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="edad">Edad:</label>
          <input
            type="number"
            id="edad"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="telefono">Telefono:</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <p style={{ color: "red" }}>{error}</p>
    </div>
  );
}

export default Form;
