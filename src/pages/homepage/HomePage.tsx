import React from 'react';
import NavbarSession from '../../components/navbar/NavbarSession';
import LandingPage from '../../components/other/LandingPage';
import ProductContainer from '../../components/other/ProductContainer';

const HomePage = () => {
  return (
    <React.Fragment>
      <NavbarSession title1="Beli" title2="Yukk" menu1="Home" menu2="Product" menu3="News" menu4="Contact" sesion1="Sign In" sesion2="Sign Up" />
      <LandingPage />
      <ProductContainer />
    </React.Fragment>
  );
};

export default HomePage;
