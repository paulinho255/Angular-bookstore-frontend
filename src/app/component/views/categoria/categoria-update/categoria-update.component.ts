import { ActivatedRoute, Router } from "@angular/router";
import { CategoriaService } from "./../../../../services/categoria.service";
import { Categoria } from "./../../../../models/categoria.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-categoria-update",
  templateUrl: "./categoria-update.component.html",
  styleUrls: ["./categoria-update.component.css"],
})
export class CategoriaUpdateComponent implements OnInit {
  categoria: Categoria = {
    id: "",
    nome: "",
    descricao: "",
  };
  constructor(
    private service: CategoriaService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.categoria.id = this.activeRouter.snapshot.paramMap.get("id");
    this.findById();
  }
  findById(): void {
    this.service
      .findById(this.categoria.id)
      .subscribe((response) => [(this.categoria = response)]);
  }
  update(): void {
    this.service.update(this.categoria).subscribe((response)=>{
      this.router.navigate(['categorias'])
      this.service.message('Your categoria' + response.nome + 'was sucessfully updated.')
    }, err =>{
      this.service.message('Error: '+ err)
    })
  }
  cancel(): void {
    this.router.navigate(['categorias'])
  }
}
