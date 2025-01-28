import React from 'react';
import { SvgCss } from 'react-native-svg/css';

const xml = (color, size) => `
  <svg width="${size}" height="${size}" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8.28799L5.98999 14.298L7.40399 15.713L12.004 11.113L16.604 15.713L18.011 14.298L12 8.28799Z" fill="${color}"></path>
  </svg>
`;
export default ({ color, size }) => <SvgCss xml={xml(color, size)} />;
