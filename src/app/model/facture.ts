export class Facture {

    constructor(
        public id : number ,
        public dateFacture : Date,
        public totalFacture : number ,
        public createdAt : Date,
        public updatedAt : Date
    )  {}
}
