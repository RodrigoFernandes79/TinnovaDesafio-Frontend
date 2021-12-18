import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Veiculos } from 'src/app/veiculos';
import { VeiculosService } from 'src/app/veiculos.service';

@Component({
  selector: 'app-detalhe-veiculos',
  templateUrl: './detalhe-veiculos.component.html',
  styleUrls: ['./detalhe-veiculos.component.scss']
})
export class DetalheVeiculosComponent implements OnInit {
  
  id:number;
veiculo:Veiculos;





  constructor(private service:VeiculosService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.veiculo = new Veiculos();
    this.id = this.route.snapshot.params['id'];
    this.service.getVeiculoById(this.id)
    .subscribe(data=>{
      console.log(data)
      this.veiculo=data
      },
      error => 
      console.log(error)
    )
    }
    toList(){
      this.router.navigate(['/veiculos'])
    }

  }


