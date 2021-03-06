
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { Observable } from 'rxjs';
import { Veiculos } from 'src/app/veiculos';
import { VeiculosService } from 'src/app/veiculos.service';


@Component({
  selector: 'app-veiculos-list',
  templateUrl: './veiculos-list.component.html',
  styleUrls: ['./veiculos-list.component.scss']
})
export class VeiculosListComponent implements OnInit {
  

veiculo:Observable<Veiculos[]>;
veiculoSelecionado:Veiculos
  



  constructor(private veiculoService:VeiculosService, private toastr: ToastrService, private router:Router) { }

  ngOnInit(): void {
    this.getVeiculo();
  }
  getVeiculo():void{
    this.veiculo = this.veiculoService.getVeiculo()
    
  }
  preparaDelecao(veiculos:Veiculos): void{
    this.veiculoSelecionado = veiculos
  }
  deleteVeiculo():void{
    this.veiculoService.deleteVeiculoById(this.veiculoSelecionado.id)
    .subscribe(() =>{
      this.toastr.success('Veículo Deletado Com Sucesso!')
      this.ngOnInit(), 
    
      () => this.toastr.error('ERRO! Não foi possível Deletar este Veículo')
    })
  }
  detalhaVeiculo(id:number):void{
    this.toastr.info('Você está sendo redirecionado para a página de Detalhamentos de Veículo')
this.router.navigate(['detalhes',id]);
  }
  atualizaVeiculo(id:number):void{
    this.toastr.info('Você está sendo redirecionado para a página de Atualização de Veículo')
    this.router.navigate(['/atualiza',id])
  }

  
}
