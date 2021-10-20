import React, { useState } from 'react';
import './TutorialFour.css';
import { Phrase } from './components/Phrase';
import { EmptyBlock } from './components/EmptyBlock';

const adjectivesArr = [
  'абсолютный',
  'адский',
  'азартный',
  'активный',
  'ангельский',
  'астрономический',
  'баснословный',
  'безбожный',
  'безбрежный',
  'безвозвратный',
  'безграничный',
  'бездонный',
  'бездушный',
  'безжалостный',
  'замечательно',
  'замечательный',
  'записной',
  'запредельный',
  'заядлый',
  'звериный',
  'зверский',
  'зеленый',
  'злой',
  'злостный',
  'значительный',
  'неоспоримый',
  'неотразимый',
  'неоценимый',
  'непередаваемый',
];
const nounsArr = [
  'лгун',
  'день',
  'конь',
  'олень',
  'человек',
  'программист',
  'ребёнок',
  'конец',
  'город',
  'дурак',
];

export const TutorialFour = () => {
  const [strArr, setStrArr] = useState([]);

  const generateRandomNumber = (length) => {
    return Math.floor(Math.random() * length);
  };

  const generateRandomStr = () => {
    let str1 = adjectivesArr[generateRandomNumber(adjectivesArr.length)];
    let str2 = adjectivesArr[generateRandomNumber(adjectivesArr.length)];
    const str3 = nounsArr[generateRandomNumber(nounsArr.length)];

    if (str1 === str2) {
      str1 = adjectivesArr[generateRandomNumber(adjectivesArr.length)];
    }

    return `${str1} ${str2} ${str3}`;
  };

  return (
    <div className="wrapper">
      {strArr.length > 0 ? <Phrase source={strArr} /> : <EmptyBlock />}
      <button
        className="btn btn_generate"
        onClick={() => setStrArr([generateRandomStr(), ...strArr])}>
        Сгенерировать
      </button>
      <button className="btn btn_clear" onClick={() => setStrArr([])}>
        Очистить
      </button>
    </div>
  );
};
