import { Component, Input, OnInit } from '@angular/core';
import { Commande } from 'src/app/model/commande';
import { Facture } from 'src/app/model/facture';
import { Livraison } from 'src/app/model/livraison';
import { Produit } from 'src/app/model/produit';
@Component({
selector: '[commande-detail]',
templateUrl: './commande-detail.component.html',
styleUrls: ['./commande-detail.component.css']
})
export class CommandeDetailComponent implements OnInit {
@Input() panier : any;
commande : any;
constructor() { }

generateCommande(panier: any) : any{
  // code to generate the order using the panier data
  let commande =new Commande (
      panier.id,
      panier.prixTotal,
      panier.quantite,
      new Date(),
      0,
      0,
      new Facture(0,new Date,0,new Date,new Date,),
      0,
      panier.utilisateur.nom,
      panier.produits,
  )
  return commande;
}

ngOnInit(): void {
  this.commande = this.generateCommande(this.panier);

}
}