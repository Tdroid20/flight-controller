import { v4 } from 'uuid'

export interface INewPassenger {
    id?: typeof v4,
    cpf: String,
    email: String | undefined,
    name: String,
    age: number,
    visa: String,
    nationality: String,
    airPlane: String,
    isMarried: Boolean
}

export interface IUpdatePassenger {
    id?: Number,
    name: String,
    age: number,
    visa: String,
    nationality: String,
    airPlane: String,
    isMarried: Boolean
}