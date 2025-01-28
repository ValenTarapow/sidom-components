import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'sidom-components';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>SIDOM Mobile - React Native Components Library</Text>
      <Button text={'Button'} onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
