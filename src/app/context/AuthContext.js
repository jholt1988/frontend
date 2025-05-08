import { createContext, useState, useEffect } from "react";

import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    const response = await axios.get(
                        `/api/users/me/${user._id}`,
                        {
                            headers: { Authorization: `Bearer ${token}` },
                        }
                    );
                    setUser(response.data.user);
                } catch (error) {
                    setUser(null);
                }
            }
            setLoading(false);
        };
        fetchUser();
    }, []);
   

    return (
        <AuthContext.Provider value={{ user, setUser, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

 // useEffect(() => {
    //     const fetchUser = async () => {
    //         const token = getToken();
    //         if (token) {
    //             try {
    //                 const response = await axios.get(
    //                   `/api/users/me/${user._id}`,
    //                   {
    //                     headers: { Authorization: `Bearer ${token}` },
    //                   }
    //                 );
    //                 setUser(response.data.user);
    //             } catch (error) {
    //                 logoutUser();
    //                 setUser(null);
    //             }
    //         }
    //         setLoading(false);
    //     };
    //     fetchUser();
    // }, []);