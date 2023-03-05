import React from 'react';
import { ProfileOutlined, LoginOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useState } from 'react';

const items = [
  {
    label: 'Login',
    key: 'login',
    icon: <LoginOutlined />,
  },
  {
    label: 'Profile',
    key: 'app',
    icon: <ProfileOutlined />,
    disabled: false,
  },
];

const HeaderSec = function(){
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return( <Menu style={{ float: "right" }} onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
);
};

export default HeaderSec;
