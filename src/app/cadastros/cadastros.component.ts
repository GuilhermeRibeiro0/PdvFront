import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'app-cadastros',
  templateUrl: './cadastros.component.html',
  styleUrls: ['./cadastros.component.css']
})
export class CadastrosComponent implements OnInit {


  lista:Cliente[] = [];
  obj:Cliente = new Cliente();
  mens = '';

  constructor(private api:ClienteService) { }

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
    .then(cliente =>{
      this.mens = cliente!.nome + "Adicionado com sucesso!!";
      this.consultar();
    });
  }
  excluir(){
    this.api.excluir(this.obj.id)
    .toPromise()
    .then(cliente =>{
      this.mens = "Cliente Excluido";
      this.consultar();
    });
  }
  alterar(){
    this.api.alterar(this.obj.id,this.obj)
    .toPromise()
    .then(cliente => {
      this.mens = cliente.nome + "Alterado com sucesso";
      this.consultar();

    });
  }
  carregarDados(c: Cliente){
    this.obj = c;
  }

}
