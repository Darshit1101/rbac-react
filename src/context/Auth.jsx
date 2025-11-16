import { createContext, useEffect, useState, memo } from "react";
import { api } from 'axiosApi';

export const AuthContext = createContext();

const Auth = ({ children }) => {
    const [user, setUser] = useState(null);
    console.log("Auth Context User==>", user);

    useEffect(() => {
        handleProfileData();
    }, []);

    //get user data api call
    const handleProfileData = async () => {
        try {
            const profileData = await api.get('/user/profile');
            setUser(profileData.data);
        } catch (error) {
            console.error("Error fetching profile data:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    )
}

export default memo(Auth);