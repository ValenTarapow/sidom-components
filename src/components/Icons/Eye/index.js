import React from 'react';
import { View } from 'react-native';
import { SvgCss } from 'react-native-svg';

const xml = (color, size) => `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:serif="http://www.serif.com/" width="100%" height="100%" viewBox="0 0 576 512" version="1.1" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <path d="M288,32C207.2,32 142.5,68.8 95.4,112.6C48.6,156 17.3,208 2.5,243.7C-0.8,251.6 -0.8,260.4 2.5,268.3C17.3,304 48.6,356 95.4,399.4C142.5,443.2 207.2,480 288,480C368.8,480 433.5,443.2 480.6,399.4C527.4,355.9 558.7,304 573.6,268.3C576.9,260.4 576.9,251.6 573.6,243.7C558.7,208 527.4,156 480.6,112.6C433.5,68.8 368.8,32 288,32ZM144,256C144,177.004 209.004,112 288,112C366.996,112 432,177.004 432,256C432,334.996 366.996,400 288,400C209.004,400 144,334.996 144,256ZM288,192C288,227.3 259.3,256 224,256C216.9,256 210.1,254.8 203.7,252.7C198.2,250.9 191.8,254.3 192,260.1C192.3,267 193.3,273.9 195.2,280.8C208.9,332 261.6,362.4 312.8,348.7C364,335 394.4,282.3 380.7,231.1C369.6,189.6 332.9,161.7 292.1,160C286.3,159.8 282.9,166.1 284.7,171.7C286.8,178.1 288,184.9 288,192Z" style="fill:rgb(207,169,0);fill-rule:nonzero;"/>
</svg>
`;
export default ({ color, size }) => (
  <View style={{ width: size, height: size }}>
    <SvgCss xml={xml(color, size)} width="100%" height="100%" />
  </View>
);
