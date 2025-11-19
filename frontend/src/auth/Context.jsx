import { createContext } from "react";

export const AuthContext = createContext()
// token do usuario
export const AuthProvider = ({ children }) => {
    return (
        <AuthContext.Provider>
            { children }
        </AuthContext.Provider>
    )
}