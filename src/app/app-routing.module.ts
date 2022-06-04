
import { CadprodutoComponent } from './cadproduto/cadproduto.component';
import { CadastrosComponent } from './cadastros/cadastros.component';

import { ContatoComponent } from './contato/contato.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'produtos',component:ProdutosComponent},
  {path:'carrinho',component:CarrinhoComponent},
  {path:'contato',component:ContatoComponent},
  {path:'cadastros',component:CadastrosComponent},
  {path:'prodcad', component:CadprodutoComponent},


];


//export const routing : ModuleWithProviders<AppRoutingModule> = RouterModule.forRoot(routes);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
