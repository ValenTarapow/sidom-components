import React from 'react';
import { SvgXml } from 'react-native-svg';

const xml = (color, size) => `
  <svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" fill="none">
    <path d="M7 20V4h6q2.05 0 3.525 1.475T18 9q0 2.05-1.475 3.525T13 14H9v6Zm2-8h4.05q1.225 0 2.113-.887.887-.888.887-2.113t-.887-2.113Q14.275 6 13.05 6H9Z" fill=${color}/>
  </svg>
  
`;
export default ({ color, size }) => <SvgXml xml={xml(color, size)} />;
