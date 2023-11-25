// HeaderIcon.jsx
import React from 'react';
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const HeaderIcon = ({ collapsed, setCollapsed }) => {
  return (
    <div className='mobile-header'>
      <Button
        type='text'
        className='toggle'
        onClick={() => setCollapsed(!collapsed)}
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      />
    </div>
  );
};

export default HeaderIcon;
