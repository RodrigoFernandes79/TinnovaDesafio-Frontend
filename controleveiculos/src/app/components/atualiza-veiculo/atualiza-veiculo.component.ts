import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { error } from 'protractor';
import { Veiculos } from 'src/app/veiculos';
import { VeiculosService } from 'src/app/veiculos.service';

@Component({
  selector: 'app-atualiza-veiculo',
  templateUrl: './atualiza-veiculo.component.html',
  styleUrls: ['./atualiza-veiculo.component.scss']
})
export class AtualizaVeiculoComponent implements OnInit {

  id:number;
  veiculo:Veiculos;
  submitted = false;

  constructor( private toastr:ToastrService , private service:VeiculosService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.veiculo = new Veiculos();
    this.id = this.route.snapshot.params['id'];
    this.service.getVeiculoById(this.id)
    .subscribe(data=>{
      console.log(data)
      this.veiculo =data;
    },error =>
      console.log(error)
    )
  }
  updateVeiculo():void{
    this.service.updateVeiculo(this.id,this.veiculo)
    .subscribe(data=>{
      console.log(data)
    },error=>console.log(error));
    this.veiculo = new Veiculos();
    this.goToList();
  }
  onSubmit():void{
    this.toastr.success('Veículo atualizado com Sucesso!')
    this.toastr.info('Você será redirecionado para a Lista de Veículos!')
    this.updateVeiculo();
  }
  goToList(){
    this.router.navigate(['/veiculos'])
  }
  

}
