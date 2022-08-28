import { Link } from '@tanstack/react-location';
import { Drawer } from 'antd';
import './index.scss';

const getActiveProps = {
  style: { color: '#5956e9' },
};

const MenuBar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: (isOpen: boolean) => void;
}) => {
  return (
    <Drawer placement='right' visible={isOpen} onClose={() => onClose(!isOpen)}>
      <ul className='nav-mobile'>
        <li>
          <Link
            className='nav-item'
            to='/doc'
            getActiveProps={() => getActiveProps}
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            className='nav-item'
            to='/pricing'
            getActiveProps={() => getActiveProps}
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            className='nav-item'
            to='/about'
            getActiveProps={() => getActiveProps}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className='nav-item'
            to='/auth/signin'
            getActiveProps={() => getActiveProps}
          >
            Sign In
          </Link>
        </li>
      </ul>
    </Drawer>
  );
};

export default MenuBar;
