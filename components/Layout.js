import Style from '../styles/Layout.module.css';
import Nav from './Nav';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div className={Style.container}>
        <main className={Style.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
