import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./components/Footer.jsx";
import Tabla from "./components/Tabla.jsx";
import Form from "./components/Form.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const db = "http://localhost:3000/";

  const [userData, setUserData] = useState({});

  useEffect(() => {
    axios
      .get(`${db}/usuarios/`)
      .then((response) => {
        setUserData(response);
      })
      .catch((error) => {
        console.log("No anduvo", error);
      });
  }, []);
  
  return (
    <div className="App">
      <Navbar />
      <Form />
      <Tabla />
      <Footer />
    </div>
  );
}

export default App;
