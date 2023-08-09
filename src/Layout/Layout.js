import React from 'react';
import Nav from '../components/Navbar/Nav';
import Sidebar from '../components/Sidebar/Sidebar';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='main'>
      <Nav />
      <div className='content'>
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
