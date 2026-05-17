import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {COLORS} from '../constants/colors';

export default function CustomButton({
  title,
  onPress,
  loading = false,
  disabled = false,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}>
      {loading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.light.primary,
    height: 58,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  disabled: {
    opacity: 0.6,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '800',
  },
});