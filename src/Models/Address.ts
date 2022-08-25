import { Geo } from "./Geo";

export class Address {
    street:string;
    suite:string;
    city:string;
    zipcode:string;
    geo: Geo;

    constructor(street:string, suite:string, city:string, zipcode:string, geo:Geo){
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
        this.geo = geo;
    }
}