import { Component, OnInit } from '@angular/core';
import { Panier } from 'src/app/model/panier';
import { Utilisateur } from 'src/app/model/utilisateur';
import { PanierService } from 'src/app/services/panier.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-panier-list',
  templateUrl: './panier-list.component.html',
  styleUrls: ['./panier-list.component.css']
})
export class PanierListComponent implements OnInit{
  paniers?: any;
  errormessage?: string;
  currentEmployee:  Panier = new Panier(0,0,0,new Date, new Date, new Date,[],new Utilisateur(0,"","","",new Date,"","","","","",new Date,new Date,""));
  currentIndex = -1;
  name = '';
  isAdmin: boolean = false

  constructor(private panierService: PanierService, private tokenStorageService: 
    TokenStorageService) {}
    
      ngOnInit(): void {
        this.panierService.getAll().subscribe(
        data => {
        this.paniers = data;
        if (this.tokenStorageService.hasRole('ADMIN')) {
        this.isAdmin = true;
        }
        },
        err => {
        this.errormessage = JSON.parse(err.error).message;
        }
        );
        }
}
