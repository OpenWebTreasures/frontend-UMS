export const CREATE_USER = "api/v1/users";
export const GET_ALL_USERS = "api/v1/users";
export const GET_USER_BY_ID = "api/v1/users/{id}";
export const ME = "api/v1/users/me";
export const DELETE_USER_BY_ID = "api/v1/users/{id}";

export const GET_ALL_FEATURES = "api/v1/features";

export const CREATE_ROLE = "api/v1/roles";
export const GET_ALL_ROLES = "api/v1/roles";
export const ASSIGN_FEATURE = "api/v1/roles/assignfeature";
export const REVOKE_FEATURE = "api/v1/roles/revokefeature";
export const GET_ROLE_BY_NAME = "api/v1/roles/{name}";


export const CHANGE_ANY_USER_PASSWORD = "api/v1/users/changeuserpassword";
export const CHANGE_SELF_PASSWORD = "api/v1/users/changeselfpassword";
export const CHANGE_USER_ROLES = "api/v1/users/changeroles";

export const UPDATE_SELF_USER_DETAILS = "api/v1/users/updateselfdetails"
export const UPDATE_ANY_USER_DETAILS = "api/v1/users/updateuserdetails/{username}"