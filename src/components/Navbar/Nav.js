import React from 'react'
import SearchPanel from './SearchPanel'
import Settings from './Settings'
import SizePage from './SizePage'
import '../../styles/style.css'
export default function Nav() {

  return (
    <div className='nav'>
      <SearchPanel />
      <Settings />
      <SizePage />
    </div>
  )
}
