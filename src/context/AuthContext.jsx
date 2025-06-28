import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [userToken, setUserToken] = useState(null);
    const [user, setUser] = useState(null);

    const login = (token, userInfo) => {
        setIsLoading(true);
        setUserToken(token);

        const userObj = {
            name: userInfo.name,
            email: userInfo.email,
            role: userInfo.role,
            id: userInfo.id,
            language: userInfo.language,
        };

        setUser(userObj);
        localStorage.setItem('userToken', token);
        localStorage.setItem('user', JSON.stringify(userObj));
        
        setIsLoading(false);
    };

    const logout = () => {
        setIsLoading(true);
        setUserToken(null);
        setUser(null);
        localStorage.removeItem('userToken');
        localStorage.removeItem('user');
        setIsLoading(false);
        navigate('/');
      };

      const isLoggedIn = () => {
        setIsLoading(true);
        const token = localStorage.getItem('userToken');
        const userStr = localStorage.getItem('user');
    
        if (token && userStr) {
          setUserToken(token);
          setUser(JSON.parse(userStr));
        }
    
        setIsLoading(false);
      };
    
      useEffect(() => {
        isLoggedIn();
      }, []);

      return (
        <AuthContext.Provider value={{ login, logout, isLoading, userToken, user }}>
          {children}
        </AuthContext.Provider>
      );
};

export const useAuth = () => useContext(AuthContext);
