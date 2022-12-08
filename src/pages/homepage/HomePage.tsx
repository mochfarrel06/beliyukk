import React from 'react';
import FooterSession from '../../components/footer/FooterSession';
import NavbarSession2 from '../../components/navbar/NavbarSession2';
import LandingPage from '../../components/other/LandingPage';
import NewsCollection from '../../components/other/NewsCollection';
import ProductContainer from '../../components/other/ProductContainer';
import SuggestionPage from '../../components/other/SuggestionPage';

const HomePage = () => {
  return (
    <React.Fragment>
      <NavbarSession2 />
      {/* <NavbarSession title1="Beli" title2="Yukk" menu1="Home" menu2="Product" menu3="News" menu4="Contact" sesion1="Sign In" sesion2="Sign Up" /> */}
      <LandingPage />
      <ProductContainer />
      <NewsCollection />
      {/* <SuggestionPage />
      <FooterSession /> */}
    </React.Fragment>
  );
};

export default HomePage;
