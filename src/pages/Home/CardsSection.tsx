import React, { useEffect, useState } from 'react';
import Card from './Card';
import './styles.scss';

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
    <section className="sections">
      {lang.map((value, index): JSX.Element => {
        return <Card content={value} number={index} />;
      })}
    </section>
  );
};

export default CardsSection;
