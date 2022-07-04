export interface AppUserDto {
  userid: string;
  username: string;
  password: String;
  authToken: String;
  role: string
}
export class AppUser {
  userid: string;
  username: string;
  password: string;
  authToken: string;
  role: string;
  constructor(userid: string,
    username: string,
    password: string,
    authToken: string,
    role: string) {
    this.userid = userid
    this.username = username;
    this.password = password;
    this.authToken = authToken;
    this.role = role
  }

}