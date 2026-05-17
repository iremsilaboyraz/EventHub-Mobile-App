import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {useTheme} from '../context/ThemeContext';

export default function HomeScreen({navigation}) {
  const {colors} = useTheme();

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.background}]}
      contentContainerStyle={{paddingBottom: 40}}>
      <View style={styles.header}>
        <Text style={[styles.welcome, {color: colors.text}]}>
          Welcome Back 👋
        </Text>

        <Text style={[styles.title, {color: colors.text}]}>
          EventHub
        </Text>
      </View>

      <View style={[styles.card, {backgroundColor: colors.card}]}>
        <Text style={[styles.cardTitle, {color: colors.text}]}>
          Your Events
        </Text>

        <Text style={[styles.cardText, {color: colors.muted}]}>
          You can manage your profile, theme settings and account preferences.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.buttonText}>Open Settings</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.fakeCard, {backgroundColor: colors.card}]}>
        <Text style={[styles.fakeTitle, {color: colors.text}]}>
          Upcoming Events
        </Text>

        <Text style={[styles.fakeText, {color: colors.muted}]}>
          🎵 Summer Music Festival
        </Text>

        <Text style={[styles.fakeText, {color: colors.muted}]}>
          🎨 UI/UX Meetup 2026
        </Text>

        <Text style={[styles.fakeText, {color: colors.muted}]}>
          🚀 React Native Conference
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },

  header: {
    marginTop: 70,
    marginBottom: 30,
  },

  welcome: {
    fontSize: 18,
    fontWeight: '600',
  },

  title: {
    fontSize: 38,
    fontWeight: '800',
    marginTop: 8,
  },

  card: {
    borderRadius: 28,
    padding: 24,
    marginBottom: 22,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 5,
  },

  cardTitle: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 12,
  },

  cardText: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 22,
  },

  button: {
    height: 56,
    backgroundColor: '#E85D75',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
  },

  fakeCard: {
    borderRadius: 28,
    padding: 24,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },

    elevation: 5,
  },

  fakeTitle: {
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 16,
  },

  fakeText: {
    fontSize: 16,
    marginBottom: 14,
  },
});