import { Address } from "./Address";
import { Company } from "./Company";

export interface User {
    id:number;
    name:string;
    email:string;
    phone:string;
    website:string;
    address: Address;
    company:Company;
}