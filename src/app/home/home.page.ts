import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReqresService } from '../services/reqres.service';
import { User } from '../models/User.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,RouterLink]
})
export class HomePage implements OnInit {
  listaUsuarios : User[] = [];

  constructor(private reqresService : ReqresService) { }
  ngOnInit() {
    this.reqresService.getUsers().subscribe(resposta =>{
      this.listaUsuarios = resposta.data as User[];
    })
  }

}
