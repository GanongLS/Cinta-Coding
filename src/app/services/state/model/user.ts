// To parse this data:
//
//   import { Convert, UserList } from "./file";
//
//   const userList = Convert.toUserList(json);

export interface UserList {
  users: User[];
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toUserList(json: string): UserList {
    return JSON.parse(json);
  }

  public static userListToJson(value: UserList): string {
    return JSON.stringify(value);
  }
}
