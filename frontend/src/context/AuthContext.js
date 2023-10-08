// AuthContext.js
import { createContext, useReducer, useContext } from 'react';
import PropTypes from 'prop-types';

export const AuthContext = createContext();

const initialState = {
    isAuthenticated: false,
    user: null,
};

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        default:
            return state;
    }
};


export const useAuth = () => { return useContext(AuthContext); }


export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    AuthProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};
