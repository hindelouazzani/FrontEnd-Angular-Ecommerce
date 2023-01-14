import { Utilisateur } from "./utilisateur";
export class Paiement {

    constructor(
        public id : number ,
        public modePaiement : String,
        public utilisateur : Utilisateur,
        public datePaiement : Date,
        public createdAt : Date,
        public updatedAt : Date

        ){}


}
