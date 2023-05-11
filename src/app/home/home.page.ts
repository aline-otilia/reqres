import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ReqresService } from '../services/reqres.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage {
id = 0;
email = '';
nome = '';
sobrenome = '';
foto = '';
  

  constructor(
    private activeteRoute: ActivatedRoute,
    private router: Router,
    private reqreService: ReqresService
  ) {}

  ngOnInit() {
    this.id = this.activeteRoute.snapshot.params['id'];

    this.reqreService.getOne(this.id).subscribe(retorno =>{
      this.email = retorno.email as string;
      this.nome = retorno.first_name as string;
      this.sobrenome = retorno.last_name as string;
      this.foto = retorno.avatar as string;
    })
  }
}
