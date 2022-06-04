import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria.model';

const url = 'http://localhost:8080/categoria';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { }

  consultar(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(url);
  }
  consultarPorId(id:number):Observable<Categoria>{
    const urlLocal = `${url}/${id}`;
    return this.http.get<Categoria>(urlLocal);
  }
  adicionar(Categoria:Categoria):Observable<Categoria>{
    return this.http.post<Categoria>(url,Categoria,httpOptions);
  }
  alterar(id:any,Categoria:Categoria):Observable<any>{
    const urlLocal = `${url}/${id}`;
    return this.http.put(urlLocal,Categoria,httpOptions);
  }
  excluir(id:any):Observable<Categoria>{
    const urlLocal = `${url}/${id}`;
    return this.http.delete<Categoria>(urlLocal,httpOptions);
  }






}
