import Purchase from "./Purchase";

export default class Movie implements Purchase {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly year: number,
        readonly country: string,
        readonly tagline: string,
        readonly genre: string[],
        readonly time: string,
    ) {};
}