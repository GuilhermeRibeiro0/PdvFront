import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';

const url = 'http://localhost:8080/produto';
const httpOptions = {
  headers: new HttpHeaders({'Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  consultar():Observable<Produto[]>{
    return this.http.get<Produto[]>(url);
  }
  consultarPorId(id:number):Observable<Produto>{
    const urlLocal = `${url}/${id}`;
    return this.http.get<Produto>(urlLocal);
  }
  adicionar(Produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(url,Produto,httpOptions);
  }
  alterar(id: any,Produto: Produto):Observable<any>{
    const urlLocal =  `${url}/${id}`;
    return this.http.put(urlLocal,Produto,httpOptions);
  }
  excluir(id:any):Observable<Produto>{
    const urlLocal =  `${url}/${id}`;
    return this.http.delete<Produto>(urlLocal,httpOptions)
  }
  
}
