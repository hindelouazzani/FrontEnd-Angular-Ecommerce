import { Facture } from "./facture";
import { Livraison } from "./livraison";
import { Utilisateur } from "./utilisateur";
import { Produit } from "./produit";


export class Commande {
    constructor(
        public  id: number, 
	    public sommeTotal:number,
        public quantite:number,
	    public dateCommande:Date,
	    public createdAt:number,
        public updatedAt:number,
        public facture : Facture,
        public livraison : Livraison,
        public utilisateur : Utilisateur,
        public produits: Produit[]
    ){

    }
}
