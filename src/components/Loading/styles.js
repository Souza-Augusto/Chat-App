import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  Container: {
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 100,
    top: height / 2,
  },
});

export default styles;
