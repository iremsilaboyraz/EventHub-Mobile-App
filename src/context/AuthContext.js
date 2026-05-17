import React, {createContext, useContext, useState} from 'react';

const AuthContext = createContext(null);

export function AuthProvider({children}) {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        username,
        password,
        expiresInMins: 30,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Giriş başarısız');
    }

    setToken(data.accessToken);
    setUser(data);

    return data;
  };

  const logout = () => {
    setToken(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{token, user, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}