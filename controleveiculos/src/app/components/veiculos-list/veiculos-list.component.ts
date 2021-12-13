import { Component, OnInit } from '@angular/core';
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
  
veiculo:Observable<Veiculos[]> 
veiculoSelecionado:Veiculos

mensagemSucesso:string
mensagemErro:string;
  constructor(private veiculoService:VeiculosService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getVeiculo();
  }
  getVeiculo():void{
    this.veiculo = this.veiculoService.getVeiculo();
  }
  preparaDelecao(veiculo:Veiculos){
    this.veiculoSelecionado = veiculo
  }
  deleteVeiculo():void{
    this.veiculoService.deleteVeiculoById(this.veiculoSelecionado.id)
    .subscribe(() =>{
      this.toastr.success('Cliente Deletado Com Sucesso!')
      this.ngOnInit(), 
    
      () => this.toastr.error('ERRO! Não foi possível Deletar este Veículo')
    })
  }

}
