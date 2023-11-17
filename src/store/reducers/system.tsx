import { HIDE_SIDEBAR, REMOVE_ACCESSTOKEN, SET_ACCESSTOKEN, SHOW_SIDEBAR } from "../actionTypes/system";

interface SystemState {
    sidebarOpen: boolean;
    accessToken: null | string;
}

interface SystemAction {
    type: string;
    payload: Partial<SystemState>;
}


const initialState: SystemState = {
    sidebarOpen: false,
    accessToken: localStorage.getItem("accessToken")
};


const systemReducer = (state: SystemState = initialState, action: SystemAction) => {
    switch (action.type) {
        case SHOW_SIDEBAR:
            return {
                ...state,
                sidebarOpen: true,
            };

        case HIDE_SIDEBAR:
            return {
                ...state,
                sidebarOpen: false,
            };

        case SET_ACCESSTOKEN:
            return {
                ...state,
                ...action.payload,
            };

        case REMOVE_ACCESSTOKEN:
            return {
                ...state,
                accessToken: null,
            };
        default:
            return state;
    }
};

export default systemReducer;