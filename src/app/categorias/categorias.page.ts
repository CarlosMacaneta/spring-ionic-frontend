import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from '../services/domain/categoria.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  public id: string;

  constructor(private router: Router, private categoriaService: CategoriaService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {

    this.categoriaService.findAll()
    .subscribe(response => {
        console.log(response);
      },
      error => {
        console.log(error);
      });
  }
}
