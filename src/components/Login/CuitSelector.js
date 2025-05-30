import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { getFont } from '../../../src/utils/fonts';
import { colors } from '../../../src/utils/colors';
import ChevronRight from '../../components/Icons/ChevronRight';
import { SvgUri } from 'react-native-svg';

export default function CuitSelector({ cuits = [], onSelect }) {
  const sortedCuits = cuits
    .slice()
    .sort((a, b) => a.razonSocial.localeCompare(b.razonSocial));

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <View style={styles.row}>
          <Text style={styles.welcome}>Bienvenido</Text>
        </View>
        <Text style={styles.message}>Seleccione una cuenta para comenzar</Text>
      </View>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {sortedCuits.map((c) => (
          <TouchableOpacity
            onPress={() => onSelect && onSelect(c)}
            key={`cuit-selector-${c.cuit}`}
          >
            <View style={styles.card}>
              <SvgUri
                width={24}
                height={24}
                uri={`https://app.sidom.io/assets/styles/umsa_2022/images/flags/${c.flag}.svg`}
              />
              <View style={styles.userDetails}>
                <Text numberOfLines={1} style={styles.user}>
                  {c.razonSocial}
                </Text>
                <Text numberOfLines={1} style={styles.cuit}>
                  {`CUIT ${c.cuit}`}
                </Text>
              </View>
              <ChevronRight
                size={16}
                color={colors.brand1}
                style={styles.arrow}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
  header: {
    padding: 32,
  },
  row: {
    marginTop: 48,
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    marginLeft: 'auto',
  },
  welcome: {
    ...getFont('Nunito', '600'),
    fontSize: 24,
    letterSpacing: 0.19,
    color: colors.black,
  },
  message: {
    height: 20,
    marginTop: 8,
    ...getFont('Nunito', '400'),
    fontSize: 14,
    color: colors.black2,
  },
  scrollContainer: {},
  card: {
    marginBottom: 12,
    borderRadius: 5,
    shadowColor: colors.black,
    shadowRadius: 6,
    shadowOpacity: 0.05,
    shadowOffset: { width: 3, height: 6 },
    elevation: 5,
    backgroundColor: colors.white,
    padding: 21,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userDetails: {
    flex: 1,
    marginLeft: 21,
  },
  user: {
    ...getFont('Nunito', '500'),
    color: colors.black,
    fontSize: 20,
    letterSpacing: 0.16,
    alignSelf: 'flex-start',
    textAlign: 'left',
  },
  cuit: {
    ...getFont('Nunito', '500'),
    fontSize: 14,
    letterSpacing: 0.16,
    textAlign: 'left',
    color: colors.darkGrey2,
    marginTop: 8,
  },
  arrow: {
    alignSelf: 'center',
    justifyContent: 'center',
  },
});
