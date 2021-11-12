import { Categoria } from './../../../../models/categoria.model';
import { CategoriaService } from './../../../../services/categoria.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categorio-delete',
  templateUrl: './categorio-delete.component.html',
  styleUrls: ['./categorio-delete.component.css']
})
export class CategorioDeleteComponent implements OnInit {
  categoria: Categoria = {
    id: '',
    nome: '',
    descricao: ''
  }
  constructor(private service: CategoriaService
             ,private activeRouter : ActivatedRoute
             ,private router: Router) { }

  ngOnInit(): void {
    this.categoria.id = this.activeRouter.snapshot.paramMap.get('id')
    this.findById()
  }

  findById(): void {
    this.service.findById(this.categoria.id).subscribe((response)=>{
      this.categoria = response
    })
  }
  
  delete():void {
    this.service.delete(this.categoria.id).subscribe(()=>{
      console.log('Response Id: ',this.categoria.id)
      this.router.navigate(['categorias'])
      this.service.message('Categoria: ' + this.categoria.nome + ' has sucessfully deleted.')
    },err => {
      this.service.message(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate(['categorias'])
  }
}
