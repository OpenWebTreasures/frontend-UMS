import { HIDE_SIDEBAR, SHOW_SIDEBAR } from "../actionTypes/system";

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
                // ...action.payload,
            };

        case HIDE_SIDEBAR:
            return {
                ...state,
                sidebarOpen: false,
                // ...action.payload,
            };
        default:
            return state;
    }
};

export default systemReducer;