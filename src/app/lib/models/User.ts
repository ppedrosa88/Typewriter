interface UserData {
    name: string;
    surname: string | undefined;
    email: string;
    password: string;
    repeatPassword: string;
}

export class User {
    name?: string;
    surname?: string;
    email: string;
    password: string;
    repeatPassword?: string;

    constructor(userData: UserData) {
        this.name = userData.name;
        this.surname = userData.surname;
        this.email = userData.email;
        this.password = userData.password;
        this.repeatPassword = userData.repeatPassword;
    }
}