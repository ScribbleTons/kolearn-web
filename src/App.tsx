import { Outlet, useLocation } from '@tanstack/react-location';
import { DefaultLayout, AdminLayout } from './layouts';
import './App.scss';

const checkIfDashboardRoute = (pathname: string) => {
  return pathname.includes('/d/');
};

function App() {
  const location = useLocation();
  const Layout = checkIfDashboardRoute(location.current.pathname)
    ? AdminLayout
    : DefaultLayout;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
