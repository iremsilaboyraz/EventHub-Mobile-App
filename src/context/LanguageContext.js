import React, {createContext, useContext, useState} from 'react';

const LanguageContext = createContext(null);

const translations = {
  EN: {
    settings: 'Settings',
    darkMode: 'Dark Mode',
    notification: 'Notification',
    language: 'Language',
    accountInfo: 'Account Info',
    security: 'Security',
    help: 'Help',
    about: 'About',
    logout: 'LOGOUT',

    loginSubtitle: 'Log in to your account',
    username: 'Username',
    password: 'Password',
    forgotPassword: 'Forgot Password?',
    login: 'LOGIN',
    noAccount: "Don't have an account?",
    signUp: 'SIGN UP',
  },

  TR: {
    settings: 'Ayarlar',
    darkMode: 'Karanlık Mod',
    notification: 'Bildirim',
    language: 'Dil',
    accountInfo: 'Hesap Bilgisi',
    security: 'Güvenlik',
    help: 'Yardım',
    about: 'Hakkında',
    logout: 'ÇIKIŞ YAP',

    loginSubtitle: 'Hesabına giriş yap',
    username: 'Kullanıcı adı',
    password: 'Şifre',
    forgotPassword: 'Şifremi Unuttum?',
    login: 'GİRİŞ YAP',
    noAccount: 'Hesabın yok mu?',
    signUp: 'KAYIT OL',
  },
};

export function LanguageProvider({children}) {
  const [language, setLanguage] = useState('EN');

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{language, setLanguage, t}}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}