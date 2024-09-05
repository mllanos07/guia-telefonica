import React, { useState } from "react";

function Input({ userData }) {
  const [text, setText] = useState("");

  const search = (event) => {
    setText(event.target.value);
  };

  const filteredUsers = userData.filter((user) =>
    user.nombre.toLowerCase().startsWith(text.toLowerCase())
  );

  return (
    <div>
      <input onChange={search} value={text} placeholder="Buscar" />
      <ul>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => <li key={user.id}>{user.nombre}</li>)
        ) : (
          <p>Sin Resultados</p>
        )}
      </ul>
    </div>
  );
}

export default Input;