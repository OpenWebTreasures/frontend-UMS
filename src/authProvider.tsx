import { AxiosResponse } from "axios";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import axiosInstance from "./axios-instance";
import { ME } from "./Apis";
import { RootState } from "./store/reducers";
import User from "./interfaces/userInterface";
import { connect } from "react-redux";
import { removeUser, setUser } from "./store/actions/user";
import { Dispatch } from "redux";
import { Outlet, useNavigate } from "react-router-dom";
import { LOGIN } from "./routes";

interface Props {
    setUser: (user: User) => void;
    accessToken: null | string;
}

const AuthGard = ({ setUser, accessToken }: Props) => {
    const navigate = useNavigate();

    useEffect(() => {
        axiosInstance.get(ME).then((response: AxiosResponse) => {
            setUser({
                ...response.data
            })
        }).catch(() => {
            localStorage.removeItem("accessToken")
            navigate(LOGIN)
        })
    }, [accessToken]);


    return <React.Fragment><Outlet /></React.Fragment>;
};


const mapStateToProps = (state: RootState) => {
    return {
        username: state.user.username,
        roles: state.user.roleNames,
        firstname: state.user.firstname,
        lastname: state.user.lastname,
        accessToken: state.system.accessToken,
    };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setUser: (user: User) => dispatch(setUser(user)),
        removeUser: () => dispatch(removeUser()),
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(AuthGard);
