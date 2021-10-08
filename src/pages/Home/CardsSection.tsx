import React, { useEffect, useState } from 'react';
import Card from './Card';
import './CardsSection.scss';

const CardsSection = (): JSX.Element => {
  const [lang, setLang] = useState([]);

  useEffect(() => {
    fetch('https://limitless-falls-01778.herokuapp.com/language')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        setLang(data);
      });
  }, []);

  return (
    <section className="languagesWrapper">
      {lang.map((value, index): JSX.Element => {
        return <Card content={value} index={index} />;
      })}
    </section>
  );
};

export default CardsSection;
