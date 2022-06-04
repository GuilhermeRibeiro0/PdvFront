import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../models/endereco.model';

const url = "http://localhost:8080/endereco";
const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  

  constructor(private http:HttpClient) { }

  consultar():Observable<Endereco[]>{
    return this.http.get<Endereco[]>(url);
  }
  consultarPorId(id:number):Observable<Endereco>{
    const urlLocal = `${url}/${id}`;
    return this.http.get<Endereco>(urlLocal);
  }
  adicionar(Endereco:Endereco):Observable<Endereco>{
    return this.http.post<Endereco>(url,Endereco,httpOptions);
  }
  alterar(id: any,Endereco: Endereco):Observable<any>{
    const urlLocal= `${url}/${id}`;
    return this.http.put(urlLocal,Endereco,httpOptions);
  }
  excluir(id:any):Observable<Endereco>{
    const urlLocal = `${url}/${id}`;
    return this.http.delete<Endereco>(urlLocal,httpOptions);
  }
}
