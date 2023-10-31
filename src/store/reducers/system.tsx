import { HIDE_SIDEBAR, SHOW_SIDEBAR } from "../actionTypes/system";

interface SystemState {
    sidebar: boolean;
}

interface SystemAction {
    type: string;
    payload: Partial<SystemState>;
}


const initialState: SystemState = {
    sidebar: false,
};


const systemReducer = (state: SystemState = initialState, action: SystemAction) => {
    switch (action.type) {
        case SHOW_SIDEBAR:
            return {
                ...state,
                sidebar: false,
                // ...action.payload,
            };

        case HIDE_SIDEBAR:
            return {
                ...state,
                sidebar: true,
                // ...action.payload,
            };
        default:
            return state;
    }
};

export default systemReducer;