import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroVeiculosComponent } from './components/cadastro-veiculos/cadastro-veiculos.component';
import { DetalheVeiculosComponent } from './components/detalhe-veiculos/detalhe-veiculos.component';
import { VeiculosListComponent } from './components/veiculos-list/veiculos-list.component';


const routes: Routes = [
  {path:'', redirectTo:'veiculos', pathMatch:'full'},
  {path:'veiculos', component:VeiculosListComponent},
  {path:'cadastrar',component:CadastroVeiculosComponent},
  {path:'detalhes/:id' ,component:DetalheVeiculosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
