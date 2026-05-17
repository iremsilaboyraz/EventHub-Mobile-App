import React, {useState} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Image,
} from 'react-native';

import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

import {useAuth} from '../context/AuthContext';
import {useLanguage} from '../context/LanguageContext';
import {useTheme} from '../context/ThemeContext';

import {COLORS} from '../constants/colors';

export default function LoginScreen() {
  const {login} = useAuth();
  const {t} = useLanguage();
  const {colors} = useTheme();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!username || !password) {
      Alert.alert('Hata', 'Kullanıcı adı ve şifre boş bırakılamaz.');
      return;
    }

    try {
      setLoading(true);
      await login(username.trim(), password);
    } catch (error) {
      Alert.alert('Giriş Başarısız', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={[styles.container, {backgroundColor: colors.background}]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      
      <Image
        source={require('../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <Text style={[styles.title, {color: colors.text}]}>
        Event<Text style={styles.highlight}>Hub</Text>
      </Text>

      <Text style={[styles.subtitle, {color: colors.muted}]}>
        {t.loginSubtitle}
      </Text>

      <View style={styles.form}>
        <CustomInput
          value={username}
          onChangeText={setUsername}
          placeholder={t.username}
          icon="user"
        />

        <CustomInput
          value={password}
          onChangeText={setPassword}
          placeholder={t.password}
          icon="lock"
          secureTextEntry={secure}
          rightIcon={secure ? 'eye-off' : 'eye'}
          onRightIconPress={() => setSecure(!secure)}
        />

        <TouchableOpacity activeOpacity={0.7}>
          <Text style={[styles.forgot, {color: colors.text}]}>
            {t.forgotPassword}
          </Text>
        </TouchableOpacity>

        <CustomButton title={t.login} loading={loading} onPress={handleLogin} />

        <View style={styles.bottomRow}>
          <Text style={[styles.bottomText, {color: colors.muted}]}>
            {t.noAccount}{' '}
          </Text>

          <Text style={styles.signUp}>{t.signUp}</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 145,
    height: 145,
    marginBottom: 10,
  },

  title: {
    fontSize: 42,
    fontWeight: '900',
  },

  highlight: {
    color: COLORS.light.primary,
  },

  subtitle: {
    marginTop: 8,
    marginBottom: 48,
    fontSize: 20,
    fontWeight: '500',
  },

  form: {
    width: '100%',
  },

  forgot: {
    alignSelf: 'flex-end',
    marginTop: 2,
    marginBottom: 24,
    fontSize: 16,
    fontWeight: '600',
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 38,
  },

  bottomText: {
    fontSize: 16,
    fontWeight: '500',
  },

  signUp: {
    fontSize: 16,
    fontWeight: '900',
    color: COLORS.light.primary,
  },
});