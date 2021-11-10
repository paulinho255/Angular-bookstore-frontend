import { Router } from '@angular/router';
import { Categoria } from './../../../../models/categoria.model';
import { CategoriaService } from './../../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {
  categoria:  Categoria = {
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.categoria).subscribe((response) =>{
      this.router.navigate(['categorias'])
      this.service.message('Categoria was created sussesfully.')
    },err =>{
      for( let i =0; i < err.error.errors.length; i++){
        this.service.message(err.error.errors[i].message)
      }
    })
  }

}
