import { Component,Input,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier-detail',
  templateUrl: './panier-detail.component.html',
  styleUrls: ['./panier-detail.component.css']
})
export class PanierDetailComponent {
  @Input()
  panier:any;
  constructor(private router: Router) {}
  ngOnInit() : void{

  }

  
   cleanPanier(){
    this.panier.produits = []; 
    this.panier.prixTotal = 0; 
    this.panier = null;
   }

  validateCart(panier: any) {
    if(panier.produits.length === 0){
      console.log("cart is empty, can't validate it");
      return;
    }
    if(panier.prixTotal === 0){
      console.log("cart total price is 0, can't validate it");
      return;
    }
    this.router.navigate(['/commande/commande-detail']);
    console.log(`Cart ${panier.id} has been validated.`);
    console.log(`Order for cart ${panier.id} has been generated.`);
  }

  
   
}
