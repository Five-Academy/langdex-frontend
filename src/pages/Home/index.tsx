import React from 'react';
import CardsSection from './CardsSection';
import SearchBox from './SearchBox';
import './styles.scss';

const Home: React.FC = () => {
  return (
    <>
      <h1 className="maintext">Langdex</h1>
      <SearchBox title="Pesquisar por nome">
        <input className="input" type="text" />
      </SearchBox>
      <CardsSection />
    </>
  );
};

export default Home;
