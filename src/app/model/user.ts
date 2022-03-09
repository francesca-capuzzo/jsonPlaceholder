import { Address } from "./address";
import { Company } from "./company";

export interface User{
    id: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
}




//COPIO DA JSON2TS WEBSITE:
// declare module namespace {

//     export interface Geo {
//         lat: string;
//         lng: string;
//     }

//     export interface Address {
//         street: string;
//         suite: string;
//         city: string;
//         zipcode: string;
//         geo: Geo;
//     }

//     export interface Company {
//         name: string;
//         catchPhrase: string;
//         bs: string;
//     }

//     export interface RootObject { //--> RootObject è il nostro User
//         id: number;
//         name: string;
//         username: string;
//         email: string;
//         address: Address;
//         phone: string;
//         website: string;
//         company: Company;
//     }

// }

