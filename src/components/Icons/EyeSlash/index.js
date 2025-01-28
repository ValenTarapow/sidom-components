import React from 'react';
import { View } from 'react-native';
import { SvgCss } from 'react-native-svg/css';

const xml = (color, size) => `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:serif="http://www.serif.com/" width="100%" height="100%" viewBox="0 0 640 512" version="1.1" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;">
    <path d="M38.8,5.1C28.4,-3.1 13.3,-1.2 5.1,9.2C-3.1,19.6 -1.2,34.7 9.2,42.9L601.2,506.9C611.6,515.1 626.7,513.2 634.9,502.8C643.1,492.4 641.2,477.3 630.8,469.1L525.6,386.7C565.2,346.1 592,300.6 605.5,268.3C608.8,260.4 608.8,251.6 605.5,243.7C590.6,208 559.3,156 512.5,112.6C465.5,68.8 400.8,32 320,32C251.8,32 195,58.3 150.7,92.8L38.8,5.1ZM223.1,149.5C248.6,126.2 282.7,112 320,112C399.5,112 464,176.5 464,256C464,280.9 457.7,304.3 446.6,324.7L408,294.5C416.4,275.2 418.6,253.1 412.8,231.2C401.7,189.7 365,161.8 324.2,160.1C318.4,159.9 315,166.2 316.8,171.8C318.9,178.2 320.1,185 320.1,192.1C320.1,202.3 317.7,211.9 313.5,220.4L223.2,149.6L223.1,149.5ZM373,389.9C356.6,396.4 338.7,400 320,400C240.5,400 176,335.5 176,256C176,249.1 176.5,242.4 177.4,235.8L83.1,161.5C60.3,191.2 44,220.8 34.5,243.7C31.2,251.6 31.2,260.4 34.5,268.3C49.4,304 80.7,356 127.5,399.4C174.5,443.2 239.2,480 320,480C367.8,480 409.9,467.1 446.2,447.5L373,389.9Z" style="fill:rgb(207,169,0);fill-rule:nonzero;"/>
</svg>
`;
export default ({ color, size }) => (
  <View style={{ width: size, height: size }}>
    <SvgCss xml={xml(color, size)} width="100%" height="100%" />
  </View>
);
