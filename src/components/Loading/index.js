import React from 'react';
import {ActivityIndicator} from 'react-native';
import styles from './styles';

export default function Loading() {
  return (
    <ActivityIndicator
      size="large"
      color="blue"
      animating
      style={styles.Container}
    />
  );
}
