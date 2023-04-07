import React from 'react';
import './whatGPT3.css';
import { Feature } from '../../components';

function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          text="WWe so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          title="What is GPT-3"
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibility are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          title="Chatbots"
        />
        <Feature
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          title="Knowledgebase"
        />
        <Feature
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          title="Education"
        />
      </div>
    </div>
  );
}

export default WhatGPT3;
