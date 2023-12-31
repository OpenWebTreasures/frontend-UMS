import User from "../../interfaces/userInterface";
import { REMOVE_USER, SET_USER } from "../actionTypes/user";


interface userAction {
    type: string;
    payload: Partial<User>;
}


const initialState: User = {
    username: "",
    roleNames: [],
    firstname: "",
    lastname: "",
    nationality: "",
    id: "",
    email: "",
    datenaissance: new Date,
    adress: "",
    createdOn: new Date(),
    lastUpdatedOn: new Date()
};


const userReducer = (state: User = initialState, action: userAction) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                ...action.payload,
            };

        case REMOVE_USER:
            return initialState;
        default:
            return state;
    }
};

export default userReducer;