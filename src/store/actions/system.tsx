import { HIDE_SIDEBAR, SHOW_SIDEBAR } from "../actionTypes/system";

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