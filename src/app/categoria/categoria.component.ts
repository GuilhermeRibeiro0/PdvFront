import { Component, OnInit } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { Produto } from '../models/produto.model';
import { CategoriaService } from '../services/categoria.service';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  lista: Categoria[] = [];
  obj: Categoria = new Categoria();
  mens = '';
  objProd: Produto = new Produto();
  listaProd: Produto[] = [];

  constructor(private api:CategoriaService,private apiProd:ProdutoService) { }

  ngOnInit(): void {
    this.consultar();
    this.consultarProd();
  }
  consultarProd() {
    this.apiProd.consultar()
    .toPromise()
    .then
    (resP =>{
      this.listaProd = resP!
    });
  }
  consultar() {
    this.api.consultar()
    .toPromise()
    .then
    (res => {
      this.lista = res!;
    });
  }
  adicionar(){
    this.api.adicionar(this.obj)
    .toPromise()
    .then(categoria => {
      this.mens = categoria!.nome + "Adicionado com sucesso";
      this.consultar();
    });
  }
  adicionarProd(id: ProdutoService){
    this.apiProd = id; 

  }
  excluir(){
    this.api.excluir(this.obj.id)
    .toPromise()
    .then(categoria => {
      this.mens = "Categoria excluida";
      this.consultar();
    });
  }
  alterar(){
    this.api.alterar(this.obj.id,this.obj)
    .toPromise()
    .then(categoria =>{
      this.mens = categoria.nome + "alterado";
      this.consultar();
    });
  }
  carregarDados(c:Categoria){
    this.obj = c;
  }
  

}
