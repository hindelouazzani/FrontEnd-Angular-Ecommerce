import { Produit } from "./produit";
import { Utilisateur } from "./utilisateur";

export class Panier {

    constructor(
        public id : number,
        public quantite : number,
        public prixTotal  : number ,
        public date  : Date ,
        public createdAt :Date ,
        public updatedAt: Date  ,
        public produits :Produit[],
        public utilisateur : Utilisateur
    ){}

}
