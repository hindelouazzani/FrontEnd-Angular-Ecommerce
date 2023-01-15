import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const AUTH_API = 'http://localhost:4200/auth/signin';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
