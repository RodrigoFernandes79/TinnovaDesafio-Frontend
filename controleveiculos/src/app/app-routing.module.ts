import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VeiculosListComponent } from './components/veiculos-list/veiculos-list.component';


const routes: Routes = [
  {path:'', redirectTo:'veiculos', pathMatch:'full'},
  {path:'veiculos', component:VeiculosListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
