import { Address } from "./Address";
import { Company } from "./Company";

export class User {
    id:number;
    name:string;
    email:string;
    phone:string;
    website:string;
    address: Address;
    company:Company;

    constructor(id:number, name:string, email:string, phone:string, website:string, address:Address, company:Company){
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.website = website;
        this.address = address;
        this.company = company;
    }
}