import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reqre } from '../models/Reqre.model';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { User } from '../models/User.model';


@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  url = 'https://reqres.in/api/users'

  constructor(private http: HttpClient, private alertCtrl: AlertController) {}

  getUsers(): Observable<Reqre> {
    return this.http.get<Reqre>(this.url);
  }

  getAll(page: number): Observable<Reqre> {
    return this.http.get<Reqre>(`${this.url}`);
  }

  /*create(user: UserCreate): Observable<UserCreate> {
    return this.http.post<UserCreate>(this.url, user).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibirErro(erro))
    );
  }*/

  getOne(id: number): Observable<Reqre> {
    return this.http.get<Reqre>(`${this.url}/${id}`).pipe(
      map((retorno) => retorno.data),
      catchError((erro) => this.exibirErro(erro))
    );
  }

 /* update(user: UserUpdate, id: number): Observable<UserUpdate> {
    return this.http.put<UserUpdate>(`${this.url}/${id}`, user).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibirErro(erro))
    );
  }*/

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }

  exibirErro(erro: any): Observable<any> {
    const titulo = 'Erro na Conexão';
    const msg = `Verifique sua conexão`;

    alert(titulo + ' ' + msg);

    return EMPTY;
  }
}
