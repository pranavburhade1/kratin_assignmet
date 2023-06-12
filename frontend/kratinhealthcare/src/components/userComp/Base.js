import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import HomeComponent from '../HomeComponent';

export default function Base() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('userLoged'));

  if (user) {
    return (
      <div>
        <Outlet />
      </div>
    );
  } else {
    navigate('/');
    return <HomeComponent />;
  }
}
