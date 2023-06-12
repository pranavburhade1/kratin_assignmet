import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomeComponent from './components/HomeComponent';
import RegistrationComponent from './components/RegistrationComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import Base from './components/userComp/Base';
import HomeUser from './components/userComp/HomeUser';
import Footer from './components/Footer';
import AddDisease from './components/userComp/AddDisease';



export default function App() {
  const [name, setName] = useState(JSON.parse(localStorage.getItem('userLoged')));
 {/*for taking email and log out button on navbar */}
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem('userLoged'));
    if (item) {
      setName(item);
    }
  }, []);

  return (
    <div>
    {/*  react routing 
    // done */}
    <Router>
      <div>
         {/* this is nav bar */}
        <NavBar name={name} setName={setName} />
        <Routes>
          <Route path="/" element={<HomeComponent setName={setName} />} />
          <Route path="/register" element={<RegistrationComponent />} />
          // this is private routing for user works after user log in
          <Route path="/user" element={<Base />}>
            <Route path="home" element={<HomeUser />} />
            <Route path="adddisease" element={<AddDisease/>} />
          </Route>
        </Routes>
         {/* this is footer */}
         <Footer/> 
      </div>
    </Router>
    </div>
  );
}
