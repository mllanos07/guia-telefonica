import React from "react";
import { useState } from "react";
import axios from "axios";
import Input from "./Input.jsx";

function Navbar({ userData }) {
  return (
    <div>
      <header className="flex-container">
        <img src="src\assets\images.jpg" alt="Guaracha" />
        <Input userData={userData} />
      </header>
    </div>
  );
}

export default Navbar;