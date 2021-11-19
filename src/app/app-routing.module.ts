import { LivroDeleteComponent } from './component/views/livro/livro-delete/livro-delete.component';
import { LivroUpdateComponent } from './component/views/livro/livro-update/livro-update.component';
import { LivroCreateComponent } from './component/views/livro/livro-create/livro-create.component';
import { LivroReadAllComponent } from './component/views/livro/livro-read-all/livro-read-all.component';
import { CategoriaUpdateComponent } from './component/views/categoria/categoria-update/categoria-update.component';
import { CategorioDeleteComponent } from './component/views/categoria/categorio-delete/categorio-delete.component';
import { CategoriaCreateComponent } from './component/views/categoria/categoria-create/categoria-create.component';
import { CategoriaReadComponent } from './component/views/categoria/categoria-read/categoria-read.component';
import { HomeComponent } from './component/views/home/home.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'categorias',
    component: CategoriaReadComponent
  },
  {
    path: 'categorias/create',
    component: CategoriaCreateComponent
  },
  {
    path: 'categorias/delete/:id',
    component: CategorioDeleteComponent
  },
  {
    path: 'categorias/update/:id',
    component: CategoriaUpdateComponent
  },
  {
    path: 'categorias/:id_cat/livros',
    component: LivroReadAllComponent
  },
  {
    path: 'categorias/:id_cat/livros/create',
    component: LivroCreateComponent
  },
  {
    path: 'categorias/:id_cat/livros/:id/update',
    component: LivroUpdateComponent
  },
  {
    path: 'categorias/:id_cat/livros/:id/delete',
    component: LivroDeleteComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
