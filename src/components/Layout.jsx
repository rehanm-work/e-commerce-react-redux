import NavBar from './NavBar';

const Layout = ({ setIsLoggedIn, isLoggedIn, children }) => {
  return (
    <>
      <NavBar setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
      {children}
    </>
  );
};

export default Layout;
