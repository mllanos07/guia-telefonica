import React from "react";
import { useState } from "react";
import axios from "axios";
import Input from "./Input.jsx";

function Navbar() {
  return (
    <div>
      <header className="flex-container">
        <img src="src\assets\images.jpg" alt="Guaracha" />
        <Input />
      </header>
    </div>
  );
}

export default Navbar;
