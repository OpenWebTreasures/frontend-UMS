import User from "../../interfaces/userInterface";
import { REMOVE_USER, SET_USER } from "../actionTypes/user";



export const setUser = (user: Partial<User>) => ({
    type: SET_USER,
    payload: user,
});

export const removeUser = () => ({
    type: REMOVE_USER
});