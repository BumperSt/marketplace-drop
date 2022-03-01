export interface IAvaliation {
    to: string,
    comment: string,
    rating : number
}

export interface IAvaliationResponse {

    reported: boolean,
    _id: string,
    from: string,
    to: string,
    rating: number,
    comment: string,
    createdAt: string,
    updatedAt: string,
    __v: number
      
}