import { environment } from './../../environments/environment';

import { Categoria } from './../models/categoria.model';
import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: string = environment.baseUrl
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }
  
  message(str: string): void {
    this._snackBar.open(`${str}`,'OK', {
     horizontalPosition: 'end',
     verticalPosition: 'top',
     duration: 3000
    })
  }

  findAll(): Observable<Categoria[]>{
    const url = `${this.baseUrl}/categorias`
    return this.http.get<Categoria[]>(url)
  }
  create(categoria: Categoria): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias`
    return this.http.post<Categoria>(url,categoria)
  }

}
