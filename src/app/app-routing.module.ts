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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
