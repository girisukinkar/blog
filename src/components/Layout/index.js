import React from 'react';
import NavBar from '../NavBar';

const Layout = ({ location, children }) => {
  // eslint-disable-next-line no-undef
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <NavBar />
      <main>{children}</main>
      <footer>
        ©
        {' '}
        {new Date().getFullYear()}
        , Girish Sukinkar 
      </footer>
    </div>
  );
};

export default Layout;
