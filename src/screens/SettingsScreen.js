import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {Picker} from '@react-native-picker/picker';

import {useAuth} from '../context/AuthContext';
import {useTheme} from '../context/ThemeContext';
import {useLanguage} from '../context/LanguageContext';

export default function SettingsScreen() {
  const {logout} = useAuth();
  const {theme, colors, toggleTheme} = useTheme();
  const {language, setLanguage, t} = useLanguage();

  const [notifications, setNotifications] = useState(true);

  return (
    <ScrollView
      style={[styles.container, {backgroundColor: colors.background}]}
      contentContainerStyle={styles.content}>
      <Text style={[styles.title, {color: colors.text}]}>{t.settings}</Text>

      <View style={[styles.card, {backgroundColor: colors.card}]}>
        <View style={styles.row}>
          <Text style={[styles.icon, {color: colors.text}]}>☾</Text>
          <Text style={[styles.label, {color: colors.text}]}>{t.darkMode}</Text>

          <Switch
            value={theme === 'dark'}
            onValueChange={toggleTheme}
            trackColor={{false: '#E5E7EF', true: '#E85D75'}}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={[styles.icon, {color: colors.text}]}>♢</Text>
          <Text style={[styles.label, {color: colors.text}]}>
            {t.notification}
          </Text>

          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{false: '#E5E7EF', true: '#E85D75'}}
            thumbColor="#FFFFFF"
          />
        </View>

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={[styles.icon, {color: colors.text}]}>◎</Text>
          <Text style={[styles.label, {color: colors.text}]}>{t.language}</Text>

          <View style={styles.languageBox}>
            <Picker
              selectedValue={language}
              onValueChange={setLanguage}
              dropdownIconColor="#111111"
              style={styles.picker}>
              <Picker.Item label="English" value="EN" />
              <Picker.Item label="Türkçe" value="TR" />
            </Picker>
          </View>
        </View>
      </View>

      <View style={[styles.card, styles.secondCard, {backgroundColor: colors.card}]}>
        <TouchableOpacity style={styles.menuRow}>
          <Text style={[styles.icon, {color: colors.text}]}>⊙</Text>
          <Text style={[styles.label, {color: colors.text}]}>
            {t.accountInfo}
          </Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.menuRow}>
          <Text style={[styles.icon, {color: colors.text}]}>▣</Text>
          <Text style={[styles.label, {color: colors.text}]}>{t.security}</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.menuRow}>
          <Text style={[styles.icon, {color: colors.text}]}>?</Text>
          <Text style={[styles.label, {color: colors.text}]}>{t.help}</Text>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.menuRow}>
          <Text style={[styles.icon, {color: colors.text}]}>ⓘ</Text>
          <Text style={[styles.label, {color: colors.text}]}>{t.about}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutText}>{t.logout}  ↪</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 40,
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 20,
  },

  card: {
    width: '100%',
    borderRadius: 22,
    paddingHorizontal: 26,
    paddingVertical: 18,
    marginBottom: 38,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 14,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    elevation: 5,
  },

  secondCard: {
    marginBottom: 36,
  },

  row: {
    minHeight: 58,
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuRow: {
    minHeight: 58,
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    width: 34,
    fontSize: 25,
    fontWeight: '600',
  },

  label: {
    flex: 1,
    fontSize: 23,
    fontWeight: '500',
  },

  divider: {
    height: 1,
    backgroundColor: '#D7D7D7',
    marginLeft: 34,
  },

  languageBox: {
    width: 120,
    height: 44,
    borderRadius: 10,
    backgroundColor: '#F4F4FA',
    overflow: 'hidden',
    justifyContent: 'center',
  },

  picker: {
    width: 125,
    height: 44,
    color: '#111111',
    fontWeight: '700',
  },

  logoutButton: {
    width: 192,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#E85D75',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logoutText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '500',
  },
});