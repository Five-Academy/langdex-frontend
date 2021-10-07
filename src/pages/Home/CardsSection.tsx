import React, { useEffect, useState } from 'react';
import Card from './Card';
import './CardsSection.scss';

const CardsSection = (): JSX.Element => {
  const [lang, setLang] = useState([]);

  useEffect(() => {
    fetch('https://cataas.com/api/cats')
      // eslint-disable-next-line no-console
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        setLang(data);
      });
  }, []);

  return (
    <section className="languagesWrapper">
      {lang.map((value): JSX.Element => {
        return <Card content={value} />;
      })}
    </section>
  );
};

export default CardsSection;
