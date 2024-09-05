import React, { useState, useEffect } from "react";
import axios from "axios";
import Footer from "./components/Footer.jsx";
import Tabla from "./components/Tabla.jsx";
import Form from "./components/Form.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  const db = "http://localhost:3000";

  const [userData, setUserData] = useState([]);

  const [refreshData, setRefreshData] = useState(false);

  useEffect(() => {
    axios
      .get(`${db}/usuarios`)
      .then(function (response) {
        setUserData(response.data);
      })
      .catch(function (error) {
        console.log("No anduvo", error);
      });
  }, [refreshData]);

  const triggerRefresh = () => {
    setRefreshData((prev) => !prev);
  };

  return (
    <div className="App">
      <Navbar userData={userData} />
      <Form onSubmit={triggerRefresh}/>
      <Tabla userData={userData} onDelete={triggerRefresh} />
      <Footer />
    </div>
  );
}

export default App;