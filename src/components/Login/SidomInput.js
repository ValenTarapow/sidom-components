import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { colors } from '../../utils/colors';
import { getFont } from '../../utils/fonts';
import ErrorSolid from '../Icons/ErrorSolid';
import { Input } from '@rneui/base';

export default function SidomInput(props) {
  const {
    handleChange,
    value,
    placeholder,
    hideValue,
    label,
    errorMessage,
    onSubmit,
    autoFocus = false,
    reference = null,
    editable,
  } = props;
  const [focus, setFocus] = useState(false);

  let inputStyles = [styles.input];
  let labelStyles = [styles.label];

  if (errorMessage.length > 0) {
    inputStyles = [styles.input, styles.inputErrorTheme];
    labelStyles = [styles.label, styles.errorLabel];
  }

  if (focus) {
    inputStyles = [styles.input, styles.inputFocusTheme];
  }

  const rightIcon =
    errorMessage.length > 0 ? (
      <ErrorSolid color={colors.red1} size={22} />
    ) : null;

  return (
    <Input
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      placeholder={placeholder}
      inputStyle={
        errorMessage.length > 0
          ? { color: colors.red1 }
          : { color: colors.black }
      }
      labelStyle={labelStyles}
      errorStyle={[styles.label, styles.errorMessage]}
      label={label}
      errorMessage={errorMessage}
      rightIcon={rightIcon}
      value={value}
      onChangeText={(v) => handleChange(v)}
      inputContainerStyle={inputStyles}
      placeholderTextColor={colors.lightGrey2}
      secureTextEntry={hideValue}
      autoCapitalize="none"
      onSubmitEditing={onSubmit || null}
      autoFocus={autoFocus}
      ref={reference}
      editable={editable}
    />
  );
}

const styles = StyleSheet.create({
  form: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  logoImage: {
    height: 125,
    width: 125,
  },
  label: {
    color: colors.black,
    fontSize: 14,
    ...getFont('Nunito', '500'),
    width: '100%',
  },
  errorLabel: {
    color: colors.red1,
  },
  errorMessage: {
    color: colors.red1,
    ...getFont('Nunito', '400'),
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    height: 48,
    borderRadius: 5,
    paddingRight: 8,
    paddingLeft: 20,
    fontSize: 12,
    ...getFont('Nunito', '400'),
    letterSpacing: -0.32,
    backgroundColor: colors.white,
    marginLeft: -10,
    marginRight: -10,
  },
  inputDefaultTheme: {
    borderColor: colors.lightGrey2,
  },
  inputFocusTheme: {
    borderColor: colors.brand2,
  },
  inputErrorTheme: {
    borderColor: colors.red1,
    color: colors.red1,
  },
  inputDisabledTheme: {
    borderColor: colors.lightGrey2,
    backgroundColor: colors.lightGrey3,
    color: colors.lightGrey2,
  },
});
