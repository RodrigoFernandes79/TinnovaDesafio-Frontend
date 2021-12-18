import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Veiculos } from 'src/app/veiculos';
import { VeiculosService } from 'src/app/veiculos.service';

@Component({
  selector: 'app-cadastro-veiculos',
  templateUrl: './cadastro-veiculos.component.html',
  styleUrls: ['./cadastro-veiculos.component.scss']
})
export class CadastroVeiculosComponent implements OnInit {

  veiculo:Veiculos =new Veiculos();
submitted = false;


  

  constructor(private service:VeiculosService, private router:Router, private toastr:ToastrService) { }

  ngOnInit(): void {
  }
  createVeiculos():void{
    this.submitted = false;
    this.veiculo = new Veiculos();
  }
  adicionarVeiculo():void{
    this.service.createVeiculo(this.veiculo)
    .subscribe(()=>this.toastr.success('Veiculo adicionado com Sucesso!'),
    ()=> this.toastr.error('Erro!Não foi possível adicionar novo veículo!'))
    this.veiculo = new Veiculos();
    this.goToList();
  }
  goToList():void{
    this.router.navigate(['/veiculos'])
  }
  onSubmit(){
    this.submitted=true;
    this.adicionarVeiculo();
  }
  
}
