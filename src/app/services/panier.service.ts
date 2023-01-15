import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../model/produit';
import { Utilisateur } from '../model/utilisateur';
import { Panier } from '../model/panier';

const API_GET_PANIERS =  'http://localhost:9090/panier/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor(private http :HttpClient) { }

 getAll() : Observable<any>{
  return this.http.get(API_GET_PANIERS);
 }

 getById(id:String): Observable<any>{
    return this.http.get('${API_GET_PANIERS}/${id}');
 }
 create(data: any): Observable<any> {
  return this.http.post(API_GET_PANIERS+'create', data,{responseType:
  'text' as 'json'});
  }
  update(id: number, data: any): Observable<string> {
    return this.http.put<string>(`${API_GET_PANIERS+'update'}/${id}`, 
data,{responseType: 'text' as 'json'});
  }
  delete(id: number): Observable<string> {
    return this.http.delete<string>(`${API_GET_PANIERS+'delete'}/${id}`, 
    {responseType: 'text' as 'json'});
    }
  creerEtAjouterAuPanier(product: Produit, utilisateur: Utilisateur) {
    if(utilisateur){
      this.getById(`${utilisateur.id}`).subscribe(panier => {
      if (!panier) {
        panier = new Panier(null,0,0,new Date(),null,null,[],utilisateur); // creer une nouvelle panier si elle n existe pas 
        this.create(panier).subscribe(response => {
          panier.id = response.id;
      }); // pour automatiser la valeur de lid 
      }
      panier.produits.push(product); 
      this.update(panier.id, panier).subscribe(); // envoyer les modification au backend
      });
  }

  }

  
 
}
