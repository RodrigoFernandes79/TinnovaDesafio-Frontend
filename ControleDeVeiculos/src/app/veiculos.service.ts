import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculos } from './veiculos';

@Injectable({
  providedIn: 'root'
})
export class VeiculosService {

  private VeiculosUrl:string = 'http://localhost:8080/veiculos'

  constructor(private http:HttpClient) { }

  getVeiculo():Observable<Veiculos[]>{
    return this.http.get<Veiculos[]>(this.VeiculosUrl);
  }

  getVeiculoById(id:number):Observable<any>{
      return this.http.get<any>(`${this.VeiculosUrl}/${id}`)
  }

  createVeiculo(veiculos:Veiculos):Observable<Veiculos>{
    return this.http.post<Veiculos>(this.VeiculosUrl,veiculos);
  }

  updateVeiculo(id:number, veiculos:any):Observable<Object>{
      return this.http.put(`${this.VeiculosUrl}/${id}`,veiculos);
  }
  deleteVeiculoById(id:number):Observable<any>{
    return this.http.delete<any>(`${this.VeiculosUrl}/${id}`)
  }
}
