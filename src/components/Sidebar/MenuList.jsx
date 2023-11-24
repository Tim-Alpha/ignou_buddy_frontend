import React from 'react';
import {Menu } from 'antd'
import {AppstoreOutlined, AreaChartOutlined, BarsOutlined, HomeOutlined, SettingOutlined, UserOutlined} from '@ant-design/icons';


const MenuList = () => {
  return (
    <Menu theme='dark'>
        <Menu.Item key="home" icon={<HomeOutlined/>}>
            Home
        </Menu.Item>
        <Menu.Item key="activity" icon={<AppstoreOutlined/>}>
            activity
        </Menu.Item>
          <Menu.SubMenu
           key="subtasks" 
           icon={<BarsOutlined />} 
           title="Tasks">
            <Menu.Item key="task-1"> Task 1</Menu.Item>
            <Menu.Item key="task-2"> Task 2</Menu.Item>
           </Menu.SubMenu>
        <Menu.Item key="about" icon={<AreaChartOutlined/>}>
            About
        </Menu.Item>
        <Menu.Item key="user" icon={<UserOutlined/>}>
            user
        </Menu.Item>
        <Menu.Item key="setting" icon={<SettingOutlined/>}>
            setting
        </Menu.Item>
    </Menu>
  );
};

export default MenuList;