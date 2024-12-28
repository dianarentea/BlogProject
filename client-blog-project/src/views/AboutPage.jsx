// src/pages/AboutPage.jsx
import React from 'react';
import {useEffect, useState} from "react";

const AboutPage = () => {
  const [backendData, setBackendData] = useState([{}]);

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => {
      setBackendData(data);
    }
  )
}, []);

  return (
    <>
     
     {(typeof backendData.users === 'undefined')  ? (<h1>Loading...</h1>): (
      backendData.users.map((user, index) => (
        <p key = {index}>{user}</p>
     )))}
    </>
  );
};



export default AboutPage;