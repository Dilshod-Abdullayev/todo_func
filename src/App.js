import React from 'react'
import './App.css'
import { useSelector, useDispatch } from "react-redux";
import MainRouter from './Routes/MainRouter'
export default function App() {
  const themeReducer = useSelector((state) => state.themeReducer);
  const theme = themeReducer.theme;
  return (
    <div className={`theme-${theme}`}>
      <MainRouter />
    </div>
  )
}
