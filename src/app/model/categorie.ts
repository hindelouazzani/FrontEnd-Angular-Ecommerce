import { Produit } from "./produit";
export class Categorie {
    
    constructor(
        public id :  number,
	    public nom: String ,
	    public createdAt: Date,
	    public updatedAt : Date,
        public produits: Produit[]
    ){}
    
}
