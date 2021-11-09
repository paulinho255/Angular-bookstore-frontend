import { CategoriaService } from './../../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria.model';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {
  categorias : Categoria[] = []
  
  displayedColumns: string[] = ['id', 'nome', 'descricao', 'livros','acoes'];
  constructor(private service: CategoriaService) { }

  ngOnInit(): void {
    this.findAll()
  }
  findAll(){
    this.service.findAll().subscribe(response => {
      console.log(response)
      this.categorias = response
    })
  }
}
