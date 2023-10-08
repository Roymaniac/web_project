// authReducer.js
export const login = (dispatch, user) => {
    dispatch({
        type: 'LOGIN',
        payload: user,
    });
};

export const logout = (dispatch) => {
    dispatch({
        type: 'LOGOUT',
    });
};
