export default interface NewPassenger extends Array<NewPassenger> {
    start: String,
    firstStop: String,
    secondStop: String,
    end: String,
}