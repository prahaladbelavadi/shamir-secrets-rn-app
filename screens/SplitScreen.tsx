import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

import { TextArea, Stack, Center, NativeBaseProvider } from 'native-base';
import ButtonGroup, { Button } from 'native-base';

export default function SplitScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Split-Screen</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      /> */}

      <Stack space={4} w="90%">
        <TextArea h={20} placeholder="Text Area Placeholder" />
      </Stack>
      <Button>Split</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
