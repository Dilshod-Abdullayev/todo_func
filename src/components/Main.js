import React from 'react'
import Nav from './Navbar/Nav'
import { useSelector } from 'react-redux'
import '../styles/style.css'
import Sidebar from './Sidebar/Sidebar';
import CreatePage from '../Page/CreatePage';
export default function Main() {
  const themeReducer = useSelector((state) => state.themeReducer);
  const theme = themeReducer.theme;
  return (
    <div className={`theme-${theme}`}>
      <div className='main'>
        <Nav />
        <div className='content'>
          <Sidebar />
          <CreatePage />
        </div>
      </div>
    </div>
  )
}
