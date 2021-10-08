import React from 'react';
import { useHistory } from 'react-router-dom';
import './CardLanguage.scss';

type Props = {
  content: {
    id: string;
    name: string;
    useCase: string;
    content: string;

    types: {
      oriented: string;
      functional: string;
      procedural: string;
    };
  };
};

function colorType(type: string) {
  return type === 'true' ? 'bg-green' : 'bg-red';
}

const CardLanguage = ({ content }: Props): JSX.Element => {
  const history = useHistory();
  return (
    <>
      <div className="container">
        <aside className="language__image image">
          <img
            className=""
            width="200"
            height="200"
            src="https://i.ibb.co/6R0T19T/java.png"
            alt="Java"
          />
        </aside>
        <aside className="card__language language">
          <div className="language__name">{content.name}</div>
          <div className="language__description description">
            <span className="description__header">{content.useCase}</span>
            <hr className="description__line" />
            <p className="description__text">{content.content}</p>
          </div>
          <article className="language__board">
            <div className="language__paradigm paradigm">
              <span className="paradigm__name">Orientada a Objeto</span>
              <div className="paradigm__value">
                <span className={colorType(content.types.oriented)}>
                  {content.types.oriented}
                </span>
              </div>
            </div>
            <div className="language__type type">
              <span className="type__name">Functional</span>
              <div className="type__value">
                <span className={colorType(content.types.functional)}>
                  {content.types.functional}
                </span>
              </div>
            </div>
            <div className="language__type type">
              <span className="type__name">Procedural</span>
              <div className="type__value">
                <span className={colorType(content.types.procedural)}>
                  {content.types.procedural}
                </span>
              </div>
            </div>
          </article>
        </aside>
      </div>
    </>
  );
};

export default CardLanguage;
