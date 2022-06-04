import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-cadproduto',
  templateUrl: './cadproduto.component.html',
  styleUrls: ['./cadproduto.component.css']
})
export class CadprodutoComponent implements OnInit {

  lista: Produto[] = [];
  obj: Produto = new Produto();
  mens = '';

  constructor(private api:ProdutoService) { }

  ngOnInit(): void {
    this.consultar();
  }
  consultar() {
    this.api.consultar()
    .toPromise()
    .then
    (res =>{
      this.lista = res!;
    }); 
  }
  adicionar(){
    this.api.adicionar(this.obj)
    .toPromise()
    .then(produto =>{
      this.mens = produto!.nome + "Produto adicionado";
      this.consultar();
    });
  }
  excluir(){
    this.api.excluir(this.obj.id)
    .toPromise()
    .then(produto =>{
      this.mens = "Produto excluido";
      this.consultar();
    });
  }
  alterar(){
    this.api.alterar(this.obj.id,this.obj)
    .toPromise()
    .then(produto =>{
      this.mens = produto.nome + "Produto Alterado";
      this.consultar();
    });
  }
  carregarDados(pro:Produto){

    this.obj = pro;
  }

}
