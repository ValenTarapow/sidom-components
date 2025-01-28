import React from 'react';
import { SvgCss } from 'react-native-svg/css';

const xml = (color, size) => `
    <svg width="${size}" height="${size}" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.46495 20.485L16.95 12L8.46495 3.515L7.04995 4.929L14.122 12L7.04995 19.071L8.46495 20.485Z" fill="${color}"></path>
    </svg>
`;
export default ({ color, size }) => <SvgCss xml={xml(color, size)} />;
