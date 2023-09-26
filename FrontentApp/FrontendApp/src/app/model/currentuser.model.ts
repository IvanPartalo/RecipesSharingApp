export class CurrentUser {
    constructor(private _token: string, private _expiration:string, private _userRoles:[]){}
    get token() {
        return this._token;
    }
    get userRoles() {
        return this._userRoles;
    }
}
