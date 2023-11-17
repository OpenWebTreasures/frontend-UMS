import { HIDE_SIDEBAR, REMOVE_ACCESSTOKEN, SET_ACCESSTOKEN, SHOW_SIDEBAR } from "../actionTypes/system";

export const hideSidebar = () => ({
    type: HIDE_SIDEBAR,
    payload: {
        sidebarOpen: false,
    },
});

export const showSidebar = () => ({
    type: SHOW_SIDEBAR,
    payload: {
        sidebarOpen: true,
    },
});

export const setAccessToken = (accessToken: string) => ({
    type: SET_ACCESSTOKEN,
    payload: {
        accessToken: accessToken,
    },
});

export const removeAccessToken = () => ({
    type: REMOVE_ACCESSTOKEN,
    payload: {
        sidebarOpen: true,
    },
});