import React from 'react';
import CardsSection from './CardsSection';
import SearchBox from './SearchBox';
import './index.scss';

const Home: React.FC = () => {
  return (
    <>
      <h1 className="mainText">Langdex</h1>
      <SearchBox title="Pesquisar por nome">
        <input className="searchInput" type="text" />
      </SearchBox>
      <CardsSection />
    </>
  );
};

export default Home;
