import { createContext, useState } from "react";

export const AuthContext = createContext();

const Auth = ({ children }) => {
    const [user, setUser] = useState('okok');
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default Auth;