import Banner from './Banner';
import Footer from './Footer';
import Header from './Header';
import PropTypes from 'prop-types';

const Layout = ({ children, page }) => {
  return (
    <>
      <Header page={page} />
      <Banner />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node,
  page: PropTypes.string,
};
