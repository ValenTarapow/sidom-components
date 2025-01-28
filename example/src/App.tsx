import { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button, ButtonBack, Modal, ToggleSwitch } from 'sidom-components';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <View style={styles.container}>
      <Text>SIDOM Mobile - React Native Components Library</Text>
      <ButtonBack />

      <Button onPress={() => {}} />

      <Button onPress={openModal} text="Open Modal" />

      {isModalVisible && (
        <Modal
          isVisible={isModalVisible}
          onCloseModal={closeModal}
          title="Example Modal Title"
          text="This is an example modal content."
        />
      )}

      <ToggleSwitch
        onToggle={(newValue: boolean) => console.log(newValue)}
        text="Switch example"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
