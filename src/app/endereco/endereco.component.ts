import { Component, OnInit } from '@angular/core';
import { Endereco } from '../models/endereco.model';
import { EnderecoService } from '../services/endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  lista: Endereco[] = [];
  obj: Endereco = new Endereco();
  mens =  '';

  constructor(private api:EnderecoService) { }

  ngOnInit(): void {
    this.consultar();
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
    .then(endereco =>{
      this.mens = "Endereço Adicionado com sucesso";
      this.consultar();
    });
  }
  excluir(){
    this.api.excluir(this.obj.id)
    .toPromise()
    .then(endereco =>{
      this.mens = "Endereço excluido";
      this.consultar();
    });
  }
  alterar(){
    this.api.alterar(this.obj.id,this.obj)
    .toPromise()
    .then(endereco =>{
      this.mens = "Endereço Alterado com sucesso"
      this.consultar();
    });
  }
  carregarDados(e:Endereco){
    this.obj = e;
  }

}
