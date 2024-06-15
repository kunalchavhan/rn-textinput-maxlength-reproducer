/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
} from 'react-native';

function App(): React.JSX.Element {
  // Initial description is set with length 10
  const [description, setDescription] = React.useState<string>('0123456789');

  // Change description to contain text with length more than 10
  const handleOnPress = React.useCallback(() => {
    setDescription('01234567890 01234567890');
  }, []);

  const [length, setLength] = React.useState<string>('');

  React.useEffect(() => {
    if (description.length > 10) {
      setLength(
        `Error Text length (${description.length}) cannot be greater than 10`,
      );
    } else {
      setLength(`Text length ${description.length}`);
    }
  }, [description]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Pressable style={styles.changeTextBtn} onPress={handleOnPress}>
          <Text style={styles.text}> Click to change text </Text>
        </Pressable>
        <TextInput
          style={styles.textInput}
          value={description}
          maxLength={10}
          onChangeText={text => setDescription(text)}
        />
        <Text style={styles.length}>{length}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  changeTextBtn: {
    margin: 16,
    backgroundColor: 'green',
    borderRadius: 3,
  },
  textInput: {
    padding: 10,
    fontSize: 14,
    color: 'black',
    borderWidth: 2,
    borderColor: '#a1a1a1',
    borderRadius: 3,
    margin: 16,
  },
  text: {
    padding: 10,
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  length: {
    textAlign: 'left',
    fontSize: 10,
    color: 'red',
    marginLeft: 16,
  },
});

export default App;
