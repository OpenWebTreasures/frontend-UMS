import axios, { AxiosResponse } from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import axiosInstance from "./axios-instance";
import { ME } from "./Apis";
import { RootState } from "./store/reducers";
import User from "./interfaces/userInterface";
import { connect } from "react-redux";
import { removeUser, setUser } from "./store/actions/user";
import { Dispatch } from "redux";
import { Outlet, useNavigate } from "react-router-dom";
import { LOGIN } from "./routes";

interface AuthContextProps {
    token: string | null;
    setToken: (newToken: string | null) => void;
}

const AuthContext = createContext<AuthContextProps>({
    token: null,
    setToken: () => { },
});

interface Props {
    setUser: (user: User) => void;
}

const AuthProvider = ({ setUser }: Props) => {
    const navigate = useNavigate();
    const [token, setToken_] = useState<string | null>(localStorage.getItem("accessToken"));

    const setToken = (newToken: string | null) => {
        setToken_(newToken);
    };

    useEffect(() => {
        axiosInstance.get(ME).then((response: AxiosResponse) => {
            console.log(response.data)
            setUser({
                ...response.data
            })
        }).catch(() => {
            localStorage.removeItem("accessToken")
            setToken(null)
            navigate(LOGIN)

        })
    }, [token]);

    const contextValue = useMemo(
        () => ({
            token,
            setToken,
        }),
        [token]
    );

    return <AuthContext.Provider value={contextValue}><Outlet /></AuthContext.Provider>;
};

export const useAuth = (): AuthContextProps => {
    return useContext(AuthContext);
};

const mapStateToProps = (state: RootState) => {
    return {
        username: state.user.username,
        roles: state.user.roleNames,
        firstname: state.user.firstname,
        lastname: state.user.lastname,
        accessToken: state.user.accessToken,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUser: (user: User) => dispatch(setUser(user)),
        removeUser: () => dispatch(removeUser()),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthProvider);
