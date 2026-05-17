import React from 'react';
import {View, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

import {COLORS} from '../constants/colors';

function InputIcon({name}) {
  if (name === 'user') {
    return (
      <View style={styles.iconBox}>
        <View style={styles.userHead} />
        <View style={styles.userBody} />
      </View>
    );
  }

  if (name === 'lock') {
    return (
      <View style={styles.iconBox}>
        <View style={styles.lockTop} />
        <View style={styles.lockBody} />
      </View>
    );
  }

  if (name === 'eye' || name === 'eye-off') {
    return (
      <View style={styles.eyeBox}>
        <View style={styles.eyeOuter} />
        <View style={styles.eyeDot} />
        {name === 'eye-off' ? <View style={styles.eyeSlash} /> : null}
      </View>
    );
  }

  return null;
}

export default function CustomInput({
  value,
  onChangeText,
  placeholder,
  icon,
  secureTextEntry = false,
  rightIcon,
  onRightIconPress,
}) {
  return (
    <View style={styles.container}>
      <InputIcon name={icon} />

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#A7A7A7"
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
      />

      {rightIcon ? (
        <TouchableOpacity onPress={onRightIconPress} activeOpacity={0.7}>
          <InputIcon name={rightIcon} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: COLORS.light.border,
    backgroundColor: '#FFF0F3',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 14,
  },

  input: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.light.text,
    paddingVertical: 0,
  },

  iconBox: {
    width: 24,
    height: 24,
    marginRight: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },

  userHead: {
    width: 8,
    height: 8,
    borderRadius: 4,
    borderWidth: 1.8,
    borderColor: '#A7A7A7',
    marginBottom: 2,
  },

  userBody: {
    width: 16,
    height: 8,
    borderTopWidth: 1.8,
    borderLeftWidth: 1.8,
    borderRightWidth: 1.8,
    borderColor: '#A7A7A7',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  lockTop: {
    width: 12,
    height: 9,
    borderWidth: 1.8,
    borderBottomWidth: 0,
    borderColor: '#A7A7A7',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },

  lockBody: {
    width: 17,
    height: 13,
    borderWidth: 1.8,
    borderColor: '#A7A7A7',
    borderRadius: 3,
    marginTop: -1,
  },

  eyeBox: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  eyeOuter: {
    width: 20,
    height: 11,
    borderWidth: 1.8,
    borderColor: '#A7A7A7',
    borderRadius: 10,
  },

  eyeDot: {
    position: 'absolute',
    width: 5,
    height: 5,
    borderRadius: 3,
    backgroundColor: '#A7A7A7',
  },

  eyeSlash: {
    position: 'absolute',
    width: 24,
    height: 2,
    backgroundColor: '#A7A7A7',
    transform: [{rotate: '-35deg'}],
  },
});