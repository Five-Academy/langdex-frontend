import React from 'react';
import './styles.scss';

type Props = {
  title: string;
  children: JSX.Element;
};

const SearchBox = ({ title, children }: Props): JSX.Element => (
  <section className="searchbox">
    <h3 className="searchboxtext">{title}</h3>
    {children}
  </section>
);

export default SearchBox;
