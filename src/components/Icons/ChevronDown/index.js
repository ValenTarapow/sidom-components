import React from 'react';
import { SvgCss } from 'react-native-svg/css';

const xml = (color, size) => `
  <svg width="${size}" height="${size}" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z" fill="${color}"></path>
  </svg>
`;
export default ({ color, size }) => <SvgCss xml={xml(color, size)} />;
