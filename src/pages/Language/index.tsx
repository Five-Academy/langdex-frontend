import React from 'react';
import CardLanguage from './CardLanguage';
import './index.scss';

const Language: React.FC = () => {
  return (
    <div className="container">
      <CardLanguage
        content={{
          id: '1010',
          name: 'Java',
          useCase: 'Uso Imperativo',
          content:
            'Application, business, client-side, general, mobile development, server-side, web',
          types: {
            oriented: 'true',
            functional: 'false',
            procedural: 'true',
          },
        }}
      />
    </div>
  );
};

export default Language;
