import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_GET_PANIERS =  'http://localhost:8080/panier/';
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
    
  
 
}
