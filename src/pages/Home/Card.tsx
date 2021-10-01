import React from 'react';
import './styles.scss';

type Props = {
  content: Array<string>;
  number: number;
};

const Card = ({ content, number }: Props): JSX.Element => (
  <div className="card">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
      className="img"
      alt="#"
    />
    <div className="div">
      <h2 className="number">#001</h2>
      <div className="text-container">
        <p className="text">Java Script blablabla</p>
      </div>
    </div>
  </div>
);

export default Card;
