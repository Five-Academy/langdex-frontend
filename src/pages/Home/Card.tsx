/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Card.scss';

type Props = {
  content: Array<string>;
};

const Card = ({ content }: Props): JSX.Element => {
  const history = useHistory();
  return (
    <div
      className="cardLanguage"
      onClick={() => history.push(`/1`)}
      /* onClick={() => history.push(`/${content.id}`)} */
      role="button"
      tabIndex={0}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png"
        /* src={content.image_url} */
        className="cardLanguageImg"
        alt="#"
        /* alt={`image from ${content.name}`} */
      />
      <div className="cardContentWrapper">
        <h2 className="cardLanguageNumber">#001</h2>
        {/* <h2 className="cardLanguageNumber">#{content.id}</h2> */}
        <div className="languageNameWrapper">
          <p className="cardLanguageName">Javascript</p>
          {/* <p className="cardLanguageName">{content.name}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
