import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {

  username:string;
  password:string;
  loginError:boolean;
cadastrando:boolean;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
    onSubmit(){
       this.router.navigate(["/veiculos"])
    }

    preparaCadastrar(event){
      event.preventDefault();
      this.cadastrando=true;
    }
  }


