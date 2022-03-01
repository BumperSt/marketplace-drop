export interface IAddress {
    zipCode:number,
    name:string,
    state:string,
    city:string,
    complement:string 
}

export interface IAddressUpdate {
    zipCode?:number,
    name?:string,
    state?:string,
    city?:string,
    complement?:string 
}