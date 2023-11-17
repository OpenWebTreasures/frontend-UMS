interface User {
    id: string;
    username: string;
    roleNames: string[];
    firstname: string;
    lastname: string;
    email: string;
    datenaissance: Date;
    nationality: string;
    adress: string;
    createdOn:Date;
    lastUpdatedOn:Date;
}
export default User;