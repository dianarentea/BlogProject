import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage, AboutPage } from "@views";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
//   const [backendData, setBackendData] = useState([{}]);

//   useEffect(() => {
//     fetch("/api").then(
//       response => response.json()
//     ).then(
//       data => {
//       setBackendData(data);
//     }
//   )
// }, []);

//   return (
//     <>
     
//      {(typeof backendData.users === 'undefined')  ? (<h1>Loading...</h1>): (
//       backendData.users.map((user, index) => (
//         <p key = {index}>{user}</p>
//      )))}
//     </>
//   );


