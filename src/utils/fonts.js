import { Platform } from 'react-native';
import { get } from 'lodash';

const androidFontMap = {
  Montserrat: {
    300: { fontFamily: 'Montserrat-Light', fontWeight: '300' },
    400: { fontFamily: 'Montserrat-Regular', fontWeight: '400' },
    500: { fontFamily: 'Montserrat-Medium', fontWeight: '500' },
    600: { fontFamily: 'Montserrat-SemiBold', fontWeight: '600' },
    700: { fontFamily: 'Montserrat-Bold', fontWeight: '700' },
  },
  Poppins: {
    300: { fontFamily: 'Poppins-Light', fontWeight: '300' },
    400: { fontFamily: 'Poppins-Regular', fontWeight: '400' },
    500: { fontFamily: 'Poppins-Medium', fontWeight: '500' },
    600: { fontFamily: 'Poppins-SemiBold', fontWeight: '600' },
    700: { fontFamily: 'Poppins-Bold', fontWeight: '700' },
  },
  Roboto: {
    300: { fontFamily: 'Roboto-Light', fontWeight: '300' },
    400: { fontFamily: 'Roboto-Regular', fontWeight: '400' },
    500: { fontFamily: 'Roboto-Medium', fontWeight: '500' },
    600: { fontFamily: 'Roboto-SemiBold', fontWeight: '600' },
    700: { fontFamily: 'Roboto-Bold', fontWeight: '700' },
  },
  Nunito: {
    300: { fontFamily: 'Nunito-Light', fontWeight: '300' },
    400: { fontFamily: 'Nunito-Regular', fontWeight: '400' },
    500: { fontFamily: 'Nunito-Medium', fontWeight: '500' },
    600: { fontFamily: 'Nunito-SemiBold', fontWeight: '600' },
    700: { fontFamily: 'Nunito-Bold', fontWeight: '700' },
  },
};

export const getFont = (fontFamily, fontWeight) => {
  if (Platform.OS === 'android') {
    return get(androidFontMap, `${fontFamily}.${fontWeight}`, {});
  }

  return { fontFamily, fontWeight };
};
