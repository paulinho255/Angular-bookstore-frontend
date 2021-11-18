import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from './../../../../services/livro.service';
import { Livro } from './../../../../models/livro.model';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-livro-update',
  templateUrl: './livro-update.component.html',
  styleUrls: ['./livro-update.component.css']
})
export class LivroUpdateComponent implements OnInit {
  titulo = new FormControl('', [Validators.minLength(3)])
  autor = new FormControl('', [Validators.minLength(3)])
  texto = new FormControl('', [Validators.minLength(10)])
  
  id_cat: string = ''  

  livro: Livro = {
    id:'',
    titulo:'',
    nome_autor:'',
    texto:''
  }
  constructor( private service: LivroService
              ,private activeRoute: ActivatedRoute
              ,private route: Router) { }

  ngOnInit(): void {
    this.id_cat = this.activeRoute.snapshot.paramMap.get('id_cat')
    this.livro.id = this.activeRoute.snapshot.paramMap.get('id')
    this.finById()
  }
  create(): void {
    this.service.update(this.livro).subscribe((response)=> {
      this.route.navigate([`categorias/${this.id_cat}/livros`])
      this.service.message('Livro has sucessfully updated.')
    }, err => {
      this.route.navigate([`categorias/${this.id_cat}/livros`])
      this.service.message('Error! It was not possible to update livro in database. '+err)
    })
  }
  finById():void{
    this.service.findById(this.livro.id).subscribe((response)=>{
      this.livro = response
    })
  }
  getMessage(){
    if(!this.titulo.valid) {
      return 'The field TITULO must be length between 3 and 100'
    }
    if(!this.autor.valid) {
      return 'The field AUTOR must be length between 3 and 100'
    }
    if(!this.texto.valid) {
      return 'The field TEXTO must be length between 10 and 2.000.000'
    }
    return false
  }
  cancel():void {
    this.route.navigate([`categorias/${this.id_cat}/livros`])
  }
}
