export interface Token {
    access_token: string,
    token_type: string,
}

export interface RequestLogin {
    username : string,
    password  : string
}
