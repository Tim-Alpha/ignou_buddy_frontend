import React from 'react';
import {Menu } from 'antd'
import {AppstoreOutlined, AreaChartOutlined, BarsOutlined, HomeOutlined, SettingOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons';


const MenuList = ({darkTheme}) => {
  return (
    <Menu theme={darkTheme ? 'dark' : 'light'} mode='inline' className='menu-bar'>
        <Menu.Item key="home" icon={<HomeOutlined/>}>
            Home
        </Menu.Item>
        <Menu.Item key="activity" icon={<AppstoreOutlined/>}>
            activity
        </Menu.Item>
          <Menu.SubMenu
           key="tasks" 
           icon={<BarsOutlined />} 
           title="Tasks">
            <Menu.Item key="task-1"> Task 1</Menu.Item>
            <Menu.Item key="task-2"> Task 2</Menu.Item>
            <Menu.SubMenu key="subtasks" title="Subtasks">
                <Menu.Item key="subtask-1">subtask-1</Menu.Item>
                <Menu.Item key="subtask-2">subtask-2</Menu.Item>
            </Menu.SubMenu>
           </Menu.SubMenu>
           <Menu.SubMenu
           key="Team"
           icon={<TeamOutlined/>}
           title="Team">
            <Menu.Item
            key="team-1">Team-1

            </Menu.Item>
            <Menu.Item
            key="team-2">Team-2

            </Menu.Item>

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