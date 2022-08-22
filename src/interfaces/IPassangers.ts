import { v4 } from 'uuid'

export interface INewPassenger {
    id?: typeof v4,
    cpf: Number,
    email?: String | undefined | null,
    name: String,
    age: number,
    visa: String,
    nationality: String,
    startIn: String,
    endsIn: String,
    isMarried: Boolean
}

export interface IUpdatePassenger {
    id?: Number,
    name: String,
    age: number,
    visa: String,
    nationality: String,
    goTo: Number,
    isMarried: Boolean
}