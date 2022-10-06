import { Suspense } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

const getActiveStyle = prop => {
  const { isActive } = prop;

  return isActive ? { color: 'red' } : { color: 'blue' };
};

export const Layout = () => {
  return (
    <div style={{ display: 'flex' }}>
      <nav>
        <NavLink style={props => ({ ...getActiveStyle(props) })} to="/home">
          Home
        </NavLink>
        <NavLink style={props => ({ ...getActiveStyle(props) })} to="/movies">
          Movies
        </NavLink>
      </nav>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
