import { ReactNode, useState } from 'react';
import { Link } from '@tanstack/react-location';
import {
  Avatar,
  Badge,
  Button,
  Dropdown,
  Layout,
  Menu,
  MenuProps,
  Select,
} from 'antd';
import {
  BookOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  QuestionOutlined,
  UserOutlined,
} from '@ant-design/icons';
import './index.scss';

const { Content, Header, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem({
  key,
  icon,
  children,
  label,
  type,
}: {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: 'group';
}): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const appMenuItems: MenuItem[] = [
  getItem({
    label: <Link to='/d/'>Analytics</Link>,
    key: '1',
    icon: <PieChartOutlined />,
  }),
  getItem({
    label: <Link to='/d/quiz'>Quizzes</Link>,
    key: '2',
    icon: <QuestionOutlined />,
  }),
  getItem({
    label: <Link to='/d/schools'>Schools</Link>,
    key: '3',
    icon: <BookOutlined />,
  }),
  getItem({
    label: <Link to='/d/users'>Users</Link>,
    key: '4',
    icon: <UserOutlined />,
  }),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

// dropdown menu
const dropdownMenu = (
  <Menu
    items={[
      {
        label: 'Profile',
        key: '1',
      },
      {
        label: 'Notification',
        key: '2',
      },
      {
        label: 'Setting',
        key: '3',
      },
      {
        label: 'Logout',
        key: '4',
      },
    ]}
  />
);

export const AdminLayout = ({ children }: { children: ReactNode }) => {
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const [collapsed, setCollapsed] = useState(false);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const toggleCollapsed = () => setCollapsed((prevState) => !prevState);

  return (
    <Layout className='admin-layout'>
      <Header className='header'>
        <Link to='/'>
          <div className='logo-container'>
            <img
              src='https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg'
              alt='logo'
            />
          </div>
        </Link>

        <nav className='nav'>
          <div className='nav-item'>
            <Select defaultValue='anonymous-admin' className='select-user-type'>
              <Select.Option value='anonymous-admin'>
                Anonymous Admin
              </Select.Option>
              <Select.Option value='anonymous-teacher'>
                Anonymous Teacher
              </Select.Option>
              <Select.Option value='admin'>Admin</Select.Option>
              <Select.Option value='teacher'>Teacher</Select.Option>
            </Select>
          </div>
          <div className='nav-item'>
            <Dropdown overlay={dropdownMenu}>
              <Badge dot offset={[-3, 7]}>
                <Avatar
                  size='large'
                  className='avatar'
                  src='https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
                />
              </Badge>
            </Dropdown>
          </div>
        </nav>
      </Header>
      <Layout className='admin-layout-content'>
        <Sider
          theme='light'
          className='side-bar'
          breakpoint='md'
          width={256}
          collapsed={collapsed}
        >
          <Menu
            mode='inline'
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            items={appMenuItems}
            className='menu'
          />
          <Button
            type='primary'
            onClick={toggleCollapsed}
            className='collapse-btn'
          >
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </Sider>
        <Content className='content-container'>{children}</Content>
      </Layout>
    </Layout>
  );
};
