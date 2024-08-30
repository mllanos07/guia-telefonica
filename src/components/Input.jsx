import React from "react";
import { useState } from "react";
import axios from "axios";

function Input() {
  const [text, setText] = useState("");

  const search = (event) => {
    setText(event.target.value);
    //products.filter((product) => product.title.startsWith(event.target.value));
  };

  return (
    <div>
      <input onChange={search} value={text} placeholder="Buscar" />
    </div>
  );
}

export default Input;
