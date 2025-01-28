import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ErrorIcon from './Icons/Error';
import Button from './Button';
import { Overlay } from '@rneui/base';
import { colors } from '../utils/colors';
import { getFont } from '../utils/fonts';

export default function Modal({
  title = 'Modal title',
  text = 'Modal text',
  onCloseModal,
  color = colors.defaultBrand2,
}) {
  return (
    <Overlay
      isVisible
      onBackdropPress={onCloseModal}
      overlayStyle={styles.overlay}
    >
      <View style={styles.wrapper}>
        <ErrorIcon size={30} color={color} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.button}>
          <Button text="Aceptar" onPress={onCloseModal} color={color} />
        </View>
      </View>
    </Overlay>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: colors.white,
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 300,
    padding: 20,
  },
  title: {
    color: colors.darkGrey,
    ...getFont('Nunito', '600'),
    fontSize: 16,
    letterSpacing: -0.32,
    marginTop: 20,
  },
  text: {
    color: colors.lightGrey1,
    ...getFont('Nunito', '600'),
    fontSize: 16,
    letterSpacing: -0.32,
    marginTop: 20,
  },
  button: {
    justifyContent: 'center',
    maxWidth: '60%',
    width: '100%',
    marginTop: 30,
  },
  buttonTitle: {
    ...getFont('Nunito', '700'),
    color: colors.white,
    fontSize: 14,
    letterSpacing: -0.28,
  },
});
