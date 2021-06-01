import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Token, RequestLogin } from '../models/token';
import { User } from 'app/models/user';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  url = 'https://qa-api.evecontrol.site/'; // api rest fake



  // injetando o HttpClient
  constructor(private httpClient: HttpClient) { }

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded','Access-Control-Allow-Origin': '*' })
  }

  // salva um Tokenro
  saveToken(requestLogin: RequestLogin): Observable<RequestLogin> {
    return this.httpClient.post<RequestLogin>(this.url+'token/', requestLogin, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  cadastro(requestCadastro: any): any {
    const endpoint = this.url+"users/";
    return this.httpClient.post<any>(endpoint, JSON.stringify(requestCadastro), this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  
  
  getToken(requestToken: any): any {
    const endpoint = this.url+"token/";
    let username = requestToken.username;
    let password = requestToken.password;
    let body = `username=${username}&password=${password}`;
    return this.httpClient.post<any>(endpoint,body, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  setToken() {
    // seta o token no header para fazer requisições internas
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*', 
        'Authorization': localStorage.getItem('even_token')      
      })
    }
  }
  
  //POST
  createUser(requestToken: any): any {
    const endpoint = this.url+"users/";
    this.setToken();
    let email = requestToken.email;
    let full_name = requestToken.full_name;
    let password = requestToken.password;
    let role = requestToken.role;
    let body = `email=${email}&full_name=${full_name}&password=${password}&role=${role}`;
    return this.httpClient.post<any>(endpoint,body, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  
   createEvent(requestToken: any): any {
    const endpoint = this.url+"events/";
    this.setToken();
    let name = requestToken.name;
    let num_max_guest = requestToken.num_max_guest;
    let dt_start = requestToken.num_max_guest;
    let dt_finish = requestToken.dt_finish;
    let body = `name=${name}&num_max_guest=${num_max_guest}&dt_start=${dt_start}&dt_finish=${dt_finish}`;
    return this.httpClient.post<any>(endpoint,body, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  
  createSubEvent(requestToken: any): any {
   const endpoint = this.url+"users/";
    this.setToken();
    let guest_id = requestToken.guest_id;
    let event_id = requestToken.event_id;
    let body = `guest_id=${guest_id}&event_id=${event_id}`;
    return this.httpClient.post<any>(endpoint,body, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  } 
  
  //GET
  readUsers(){
    const endpoint = this.url+"users/";
    this.setToken();
    return this.httpClient.get<any>(endpoint, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  readEvents(){
    const endpoint = this.url+"events/";
    this.setToken();
    console.log(this.httpOptions);
    return this.httpClient.get<any>(endpoint, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  readEventsID(){
    const endpoint = this.url+"events/10";
    this.setToken();
    console.log(this.httpOptions);
    return this.httpClient.get<any>(endpoint, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  readEventsSub(){
    const endpoint = this.url+"events/subscribed/";
    this.setToken();
    console.log(this.httpOptions);
    return this.httpClient.get<any>(endpoint, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  readEventsSubID(){
    const endpoint = this.url+"events/subscribed/EvenOne";
    this.setToken();
    console.log(this.httpOptions);
    return this.httpClient.get<any>(endpoint, this.httpOptions)
    .pipe(
      retry(2),
      catchError(this.handleError)
    )
  }
  
  // Manipulação de erros
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;
    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}