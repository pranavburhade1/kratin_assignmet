import React from 'react';
import { useNavigate } from 'react-router-dom';
import IsLogInUSer from '../services/Autho';

export default function NavBar({ name, setName }) {
  const navigate = useNavigate();

  // log out functionality removes saved login details from local storage so session ends 
  // then navigate to / page.
  const logOut = () => {
    localStorage.removeItem('userLoged');
    setName(null);
    navigate('/');
  };

  return (
    <div className='row'>
      <nav className='navbar bg-body-primary' style={{ backgroundColor: 'skyblue' }}>
        <div className='container m-0 col-lg-9 col-md-6 col-sm-12'>
          <a href='/'>
            <img src='./kratin.png' alt='Bootstrap' width='80' height='24' />
          </a>
          {/* // if user log in then only show add disease link  */}
        { IsLogInUSer() && <a href='/user/adddisease' > Add Disease</a>}
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12'>
          <div>
            {/* // if user log in then show email and log out button on nav bar */}
            {name && name.email} &nbsp;&nbsp;
            {name && (
              <span className='btn btn-danger' onClick={logOut}>
                Logout
              </span>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}