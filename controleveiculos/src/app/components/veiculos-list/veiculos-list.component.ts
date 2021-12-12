import { Component, OnInit } from '@angular/core';
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

mensagemSucesso:String;
mensagemErro:String;
  constructor(private veiculoService:VeiculosService) { }

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
    .subscribe(mensagem =>{
      this.mensagemSucesso ='Cliente Deletado Com Sucesso!',
      this.ngOnInit();
    },
    error=> this.mensagemErro= 'ERRO! Não foi possível Deletar este Veículo'
    )
  }

}
