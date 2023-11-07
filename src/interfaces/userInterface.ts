interface User {
    id: string;
    username: string;
    roles: string[];
    firstname: string;
    lastname: string;
    email: string;
    datenaissance: Date;
    nationality: string;
    adress: string;
    accessToken: string;
    createdOn:Date;
    lastUpdatedOn:Date;
}
export default User;