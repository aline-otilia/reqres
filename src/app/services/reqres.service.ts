import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reqre } from '../models/Reqre.model';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  url = 'https://reqres.in/api/users?page=2'
  
  constructor(private http: HttpClient, private alertCtrl: AlertController) {}

  create(reqre: Reqre) : Observable<Reqre> {
    return this.http.post<Reqre>(this.url, reqre).pipe(
      map(retorno => retorno),
      catchError((erro) => this.exibirErro(erro))
    );;
  }

  getAll(): Observable<Reqre[]> {
    return this.http.get<Reqre[]>(this.url).pipe(
      map(retorno => retorno),
      catchError((erro) => this.exibirErro(erro))
    );
  }

  getOne(id: number): Observable<Reqre> {
    // this.http.get(this.url + '/' + id);
    return this.http.get<Reqre>(`${this.url}/${id}`).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibirErro(erro))
    );
  }

  update(reqre: Reqre): Observable<Reqre> {
    return this.http.put<Reqre>(`${this.url}/${reqre.id}`, reqre).pipe(
      map((retorno) => retorno),
      catchError((erro) => this.exibirErro(erro))
    );
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  login() {}

  logout() {}

  exibirErro(erro: any): Observable<any>{
    const titulo = 'Erro na Conexão!'
    const msg = `Verifique sua conexão ou informe ao suporte o erro: ${erro.status}`
    this.presentAlert(titulo, msg);
    return EMPTY;
  }

  async presentAlert(titulo: string, msg: string) {
    const alert = await this.alertCtrl.create({
      header: titulo,
      message: msg,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
