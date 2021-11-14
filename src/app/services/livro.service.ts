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

  constructor(private http: HttpClient) { }

  findAllByCategoria(id:string): Observable<Livro[]>{
    const url: string = `${baseUrl}/livros?categoria=${id}`
    return this.http.get<Livro[]>(url)
  }
}
