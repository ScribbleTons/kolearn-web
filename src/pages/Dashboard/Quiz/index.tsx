import { Outlet } from '@tanstack/react-location';
import './index.scss';

const Quiz = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Quiz;
