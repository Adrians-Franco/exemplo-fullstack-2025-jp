import { createContext, useState } from "react";

export const AuthContext = createContext()
// token do usuario
export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null)

    const login = (token) => {
        setToken(token)
        localStorage.setItem('token', token)
    }

    const logout = () => {
        setToken(null)
        localStorage.removeItem('token')
    }

    return (
        <AuthContext.Provider value={{ token, login, logout }}>
            { children }
        </AuthContext.Provider>
    )
}