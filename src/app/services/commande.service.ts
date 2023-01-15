import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const API_GET_COMMANDES = 'http//localhost:4200/commande'
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(API_GET_COMMANDES);
  }
  getById(id:string): Observable<any> {
    return this.http.get(`${API_GET_COMMANDES}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(API_GET_COMMANDES+'create', data,{responseType:
    'text' as 'json'});
  }

  update(id: number, data: any): Observable<string> {
    return this.http.put<string>(`${API_GET_COMMANDES+'update'}/${id}`, 
  data,{responseType: 'text' as 'json'});
  }
  delete(id: number): Observable<string> {
return this.http.delete<string>(`${API_GET_COMMANDES+'delete'}/${id}`, 
{responseType: 'text' as 'json'});
    
  }
}