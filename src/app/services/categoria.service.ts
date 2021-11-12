import { environment } from './../../environments/environment';

import { Categoria } from './../models/categoria.model';
import { HttpClient,HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': '*/*',
    'Access-Control-Allow-Origin':'*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  
  baseUrl: string = environment.baseUrl
  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }
  
  message(str: string): void {
    this._snackBar.open(`${str}`,'OK', {
     horizontalPosition: 'center',
     verticalPosition: 'top',
     duration: 3000,
     panelClass: ['messageWarn']
    })
  }

  findById(id: string): Observable<Categoria>{
    const url = `${this.baseUrl}/categorias/${id}`
    return this.http.get<Categoria>(url)
  }
  findAll(): Observable<Categoria[]>{
    const url = `${this.baseUrl}/categorias`
    return this.http.get<Categoria[]>(url)
  }
  create(categoria: Categoria): Observable<Categoria> {
    const url = `${this.baseUrl}/categorias`
    return this.http.post<Categoria>(url,categoria)
  }
  delete(id:string): Observable<void> {
     const url = `${this.baseUrl}/categorias/${id}` 
     return this.http.delete<void>(url)
  }
}
