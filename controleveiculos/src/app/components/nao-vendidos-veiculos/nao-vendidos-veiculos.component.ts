import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Veiculos } from 'src/app/veiculos';
import { VeiculosService } from 'src/app/veiculos.service';

@Component({
  selector: 'app-nao-vendidos-veiculos',
  templateUrl: './nao-vendidos-veiculos.component.html',
  styleUrls: ['./nao-vendidos-veiculos.component.scss']
})
export class NaoVendidosVeiculosComponent implements OnInit {

  veiculos:Observable<Veiculos[]>;

  constructor(private service:VeiculosService, private router:Router) { }

  ngOnInit(): void {
    this.getVeiculos();
  }
getVeiculos():void{
  this.veiculos= this.service.getVeiculo()
}
toList():void{
  this.router.navigate(['/veiculos'])
}
}
