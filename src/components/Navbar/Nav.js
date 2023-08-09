import React from 'react'
import Settings from './Settings'
import SizePage from './SizePage'
import '../../styles/style.css'
import Menu from './Menu'
export default function Nav() {
  return (
    <div className='nav'>
      <div className='menu__nav'>
        <Menu />
      </div>
      <div className='nav__item'>
        <Settings />
        <SizePage />
      </div>
    </div>
  )
}
