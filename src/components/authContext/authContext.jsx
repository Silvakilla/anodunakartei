import React, { createContext } from 'react';

const AuthContext = createContext({
    user: null,
    isAuthenticated: false,
    updateUser: () => {},
    setAuthentication: () => {},
    handeLogin: () => {}
});

export default AuthContext;