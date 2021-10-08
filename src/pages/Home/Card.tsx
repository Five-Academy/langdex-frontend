/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useHistory } from 'react-router-dom';
import './Card.scss';

type Props = {
  content: Content;
  index: number;
};

type Content = {
  _id: number;
  name: string;
  // eslint-disable-next-line camelcase
  image_url: string;
};

const Card = ({ content, index }: Props): JSX.Element => {
  const history = useHistory();
  return (
    <div
      className="cardLanguage"
      onClick={() => history.push(`/language/${content._id}`)}
      role="button"
      tabIndex={0}
    >
      <img
        src={content.image_url}
        className="cardLanguageImg"
        alt={`${content.name}`}
      />
      <div className="cardContentWrapper">
        {/* <h2 className="cardLanguageNumber">#001</h2> */}
        <h2 className="cardLanguageNumber">#{index}</h2>
        <div className="languageNameWrapper">
          {/* <p className="cardLanguageName">Javascript</p> */}
          <p className="cardLanguageName">{content.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
