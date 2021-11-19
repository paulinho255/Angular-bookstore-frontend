import { ActivatedRoute, Router } from '@angular/router';
import { LivroService } from './../../../../services/livro.service';
import { Livro } from './../../../../models/livro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-livro-read',
  templateUrl: './livro-read.component.html',
  styleUrls: ['./livro-read.component.css']
})
export class LivroReadComponent implements OnInit {

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
  finById():void{
    this.service.findById(this.livro.id).subscribe((response)=>{
      this.livro = response
    })
  }
  cancel():void {
    this.route.navigate([`categorias/${this.id_cat}/livros`])
  }

}
