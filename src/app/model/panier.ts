import { Produit } from "./produit";
import { Utilisateur } from "./utilisateur";

export class Panier {

    constructor(
        public id : number | null ,
        public quantite : number,
        public prixTotal  : number ,
        public date  : Date | null  ,
        public createdAt :Date | null ,
        public updatedAt: Date  | null  ,
        public produits :Produit[],
        public utilisateur : Utilisateur
    ){}

}
