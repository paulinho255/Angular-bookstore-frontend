import { LivroService } from './../../../../services/livro.service';
import { Livro } from './../../../../models/livro.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-read-all',
  templateUrl: './livro-read-all.component.html',
  styleUrls: ['./livro-read-all.component.css']
})
export class LivroReadAllComponent implements OnInit {
  id_cat: string = ''
  livros: Livro[] = []

  displayedColumns: string[] = ['id', 'titulo', 'livros','acoes'];
  constructor(private service: LivroService, 
              private router: Router, 
              private activeRouter: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.id_cat = this.activeRouter.snapshot.paramMap.get('id_cat')
    this.findAll()
  }

  findAll(): void {
    this.service.findAllByCategoria(this.id_cat).subscribe((response) =>{
      this.livros = response
      console.log('Livro Array: '+this.livros)
    })
  }

  createLivro():void {
    this.router.navigate([`categorias/${this.id_cat}/livros/create`])
  }

}
