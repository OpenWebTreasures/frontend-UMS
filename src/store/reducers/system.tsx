import { HIDE_SIDEBAR, SHOW_SIDEBAR } from "../actionTypes/system";

interface SystemState {
    sidebarOpen: boolean;
    username: string;
    roles: string[];
    firstname: string;
    lastname: string;
    token: string;
}

interface SystemAction {
    type: string;
    payload: Partial<SystemState>;
}


const initialState: SystemState = {
    sidebarOpen: false,
    username: "",
    roles: [],
    firstname: "",
    lastname: "",
    token: ""
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