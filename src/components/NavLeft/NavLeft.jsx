import React, { useState, useEffect } from 'react'
import { Card, Menu } from 'antd'
import { Link } from 'react-router-dom'
import './index.less'
import menuList from '../../resouce/menuConfig'
const SubMenu = Menu.SubMenu


export default function NavLeft() {
    let [menuTree2, setMenuTree] = useState(menuList)

    // let renderMenu = (data) => {
    //     return data.map(item => {
    //         if (data.children) {
    //             return (
    //                 <SubMenu title={item.title} key={item.key}>
    //                     {renderMenu(data.children)}
    //                 </SubMenu>
    //             )
    //         } else {
    //             return (
    //                 <Menu.Item title={item.title} key={item.key}>
    //                     <Link to={item.key}>
    //                         {item.title}
    //                     </Link>
    //                 </Menu.Item>
    //             )
    //         }
    //     })
    // }
    useEffect(() => {
    }, [])

    return (
        <div>
            <div className='logo'>
                <img src="/assets/logo-ant.svg" alt="" />
                <h1>左岸</h1>
            </div>
            <Menu
                theme='dark'
                items={menuTree2}
            >

            </Menu>
        </div>
    )
}
