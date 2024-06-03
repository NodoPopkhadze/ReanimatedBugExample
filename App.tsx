import React from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import ReanimatedScrollComponent from './ReanimatedScrollComponent';
import KeyboardStickyView from './StickyView';
import {
  GestureHandlerRootView,
  TextInput as GestureTextInput,
} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        <ReanimatedScrollComponent>
          {new Array(10).fill(0).map((_, i) => (
            <TextInput
              style={styles.textInputStyle}
              key={i}
              placeholder={`TextInput#${i}`}
              keyboardType={'default'}
            />
          ))}
          <TouchableOpacity onPress={() => console.log('no log if you scroll')}>
            <Text>button</Text>
          </TouchableOpacity>
          {new Array(5).fill(0).map((_, i) => (
            <TextInput
              style={styles.textInputStyle}
              key={i}
              placeholder={`TextInput#${i}`}
              keyboardType={'default'}
            />
          ))}
          {/* {new Array(10).fill(0).map((_, i) => (
            <GestureTextInput
              style={[styles.textInputStyle, styles.backgroundViolet]}
              key={i}
              placeholder={`Gesture TextInput#${i}`}
              keyboardType={'default'}
            />
          ))} */}
        </ReanimatedScrollComponent>
        <KeyboardStickyView style={styles.stickyViewStyle}>
          <TouchableOpacity>
            <Text>Reanimated.View</Text>
          </TouchableOpacity>
        </KeyboardStickyView>
      </View>
    </GestureHandlerRootView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  textInputStyle: {
    backgroundColor: 'purple',
    height: 40,
    marginTop: 20,
    borderRadius: 10,
  },
  stickyViewStyle: {
    height: 100,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundViolet: {
    backgroundColor: 'red',
  },
  buttonStyle: {
    height: 50,
    width: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});
