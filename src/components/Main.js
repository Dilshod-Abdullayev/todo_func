import React from 'react'
import Nav from './Navbar/Nav'
import { useSelector } from 'react-redux'
import '../styles/style.css'
export default function Main() {
  const themeReducer = useSelector((state) => state.themeReducer);
  const theme = themeReducer.theme;
  return (
    <div className={`theme-${theme}`}>
      <Nav />
    </div>
  )
}
