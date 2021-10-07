import React from 'react';
import './SearchBox.scss';

type Props = {
  title: string;
  children: JSX.Element;
};

const SearchBox = ({ title, children }: Props): JSX.Element => (
  <>
    <section className="searchBoxWrapper">
      <h3 className="searchBoxText">{title}</h3>
      {children}
    </section>
    <hr className="searchBoxLine" />
  </>
);

export default SearchBox;
