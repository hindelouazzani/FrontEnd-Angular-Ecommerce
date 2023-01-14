import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_GET_FACTURE = 'http://localhost:8080/facture';

@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(API_GET_FACTURE);
    }
  getById(id:string): Observable<any> {
    return this.http.get(`${API_GET_FACTURE}/${id}`);
    }
  create(data: any): Observable<any> {
    return this.http.post(API_GET_FACTURE+'create', data,{responseType:
    'text' as 'json'});
    }

  update(id: number, data: any): Observable<string>{
     return this.http.put<string>(`${API_GET_FACTURE+'update'}/${id}`, 
    data,{responseType: 'text' as 'json'});
    }
  delete(id: number): Observable<string> {
    return this.http.delete<string>(`${API_GET_FACTURE+'delete'}/${id}`, 
    {responseType: 'text' as 'json'});
    }
    
}