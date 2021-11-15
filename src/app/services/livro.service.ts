import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from './../../environments/environment';
import { Livro } from './../models/livro.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl: string = environment.baseUrl

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) { }
  message(str: string): void {
    this._snackBar.open(`${str}`,'OK', {
     horizontalPosition: 'center',
     verticalPosition: 'top',
     duration: 3000,
     panelClass: ['messageWarn']
    })
  }
  
  findAllByCategoria(id:string): Observable<Livro[]>{
    const url: string = `${baseUrl}/livros?categoria=${id}`
    return this.http.get<Livro[]>(url)
  }

  create(livro: Livro, id: string): Observable<Livro>{
    const url: string = `${baseUrl}/livros?categoria=${id}`
    return this.http.post<Livro>(url,livro)
  }
}
