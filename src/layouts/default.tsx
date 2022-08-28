import { ReactNode, useState } from 'react';
import { Layout } from 'antd';

import { MenuOutlined } from '@ant-design/icons';
import MenuBar from '../components/MenuBar';
import { Link } from '@tanstack/react-location';
import './index.scss';


const { Content, Header, Footer } = Layout;

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout className='layout-container'>
      <MenuBar isOpen={collapsed} onClose={setCollapsed} />
      <header className='header'>
        <Link to='/'>
          <div className='logo-container'>
            <img
              src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
              alt='logo'
            />
          </div>
        </Link>
        <div className='hamburger-icon' onClick={() => setCollapsed(true)}>
          <MenuOutlined />
        </div>
        <nav className='nav'>
          <Link className='nav-item' to='/doc'>
            Features
          </Link>
          <Link className='nav-item' to='/pricing'>
            Pricing
          </Link>
          <Link className='nav-item' to='/about'>
            About
          </Link>
          <Link className='nav-item' to='/auth/signin'>
            Sign In
          </Link>
        </nav>
      </header>
      <Content className='content-container'>{children}</Content>
      <Footer className='footer'> Footer</Footer>
    </Layout>
  );
};
