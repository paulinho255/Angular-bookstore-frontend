import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from './../../../../services/livro.service';
import { Livro } from './../../../../models/livro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-delete',
  templateUrl: './livro-delete.component.html',
  styleUrls: ['./livro-delete.component.css']
})
export class LivroDeleteComponent implements OnInit {

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
  delete(): void {
    this.service.delete(this.livro.id).subscribe((response)=> {
      this.route.navigate([`categorias/${this.id_cat}/livros`])
      this.service.message('Livro has sucessfully deleted.')
    }, err => {
      this.route.navigate([`categorias/${this.id_cat}/livros`])
      this.service.message('An error was ocurred while deleting livro. '+err)
    })
  }
  finById():void{
    this.service.findById(this.livro.id).subscribe((response)=>{
      this.livro = response
    })
  }
  cancel():void {
    this.route.navigate([`categorias/${this.id_cat}/livros`])
  }
}
