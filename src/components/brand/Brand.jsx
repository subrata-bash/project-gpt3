import React from 'react';

import { google, slack, atlassian, dropbox, shopify } from './imports';

import './brand.css';

function Brand() {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="goolge" />
      </div>
      <div>
        <img src={slack} alt="goolge" />
      </div>
      <div>
        <img src={atlassian} alt="goolge" />
      </div>
      <div>
        <img src={dropbox} alt="goolge" />
      </div>
      <div>
        <img src={shopify} alt="goolge" />
      </div>
    </div>
  );
}

export default Brand;
