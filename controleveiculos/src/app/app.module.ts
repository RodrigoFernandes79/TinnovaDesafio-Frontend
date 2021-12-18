import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VeiculosListComponent } from './components/veiculos-list/veiculos-list.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { CadastroVeiculosComponent } from './components/cadastro-veiculos/cadastro-veiculos.component';
import { DetalheVeiculosComponent } from './components/detalhe-veiculos/detalhe-veiculos.component';
import { SimOuNaoPipe } from './pipes/SimOuNaoPipe';
import { AtualizaVeiculoComponent } from './components/atualiza-veiculo/atualiza-veiculo.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    VeiculosListComponent,
    CadastroVeiculosComponent,
    DetalheVeiculosComponent,
    SimOuNaoPipe,
    AtualizaVeiculoComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    
    
    
  
     
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
