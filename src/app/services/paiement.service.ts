import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_GET_PAIEMENT = 'http://localhost:8080/paiement';


@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(API_GET_PAIEMENT);
    }
  getById(id:string): Observable<any> {
    return this.http.get(`${API_GET_PAIEMENT}/${id}`);
    }
  create(data: any): Observable<any> {
    return this.http.post(API_GET_PAIEMENT+'create', data,{responseType:
    'text' as 'json'});
    }

  update(id: number, data: any): Observable<string>{
     return this.http.put<string>(`${API_GET_PAIEMENT+'update'}/${id}`, 
    data,{responseType: 'text' as 'json'});
    }
  delete(id: number): Observable<string> {
    return this.http.delete<string>(`${API_GET_PAIEMENT+'delete'}/${id}`, 
    {responseType: 'text' as 'json'});
    }
}
