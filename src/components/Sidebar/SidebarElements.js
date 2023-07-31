import React from 'react'
import { IoIosCreate } from "react-icons/io"
import { FiUsers } from 'react-icons/fi'
import { useSelector, useDispatch } from "react-redux";
import '../../styles/style.css'
import { RxDashboard } from 'react-icons/rx'
export const SidebarElements = () => {
    const sizeReduc = useSelector((state) => state.menuReducer);
    const dispatch = useDispatch();
    let menu = sizeReduc.menu;
    return (
        <div className='sidebar__elements'>
            <h1 className={menu ? "secret" : 'side_title'}>Sidebar Elements</h1>
            <div className='elements'>
                <div className='side_element'><IoIosCreate /><button className={menu ? "secret" : 'side_title'}>Create User</button></div>
                <div className='side_element'><FiUsers /><button className={menu ? "secret" : 'side_title'}>Users</button></div>
                <div className='side_element'><RxDashboard /><button className={menu ? "secret" : 'side_title'}>Dashboard</button></div>
            </div>
        </div>
    )
}
