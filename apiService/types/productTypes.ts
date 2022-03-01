export interface IProduct {
    secondaryImages: string[],
    _id: string,
    name: string,
    description: string,
    value: number,
    size: number,
    hasBox: boolean,
    inHands: boolean,
    createdBy:string,
    createdAt: string,
    updatedAt: string,
    __v: number
}

export interface INewproduct {
    name:string,
    description:string,
    value:number,
    size:number,
    hasBox:boolean,
    inHands:boolean,
    category:string,
    condition:string,
    condition_value:number
}

export interface ISearchTypes {
    page? :number,
    limit?: number,
    name? : string,
    username? : string,
}