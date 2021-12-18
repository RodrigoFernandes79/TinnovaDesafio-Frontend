import { Pipe, PipeTransform } from "@angular/core";
import { Observable } from "rxjs";
import { Veiculos } from "./veiculos";



@Pipe({name: "SimOuNao"})

export class SimOuNaoPipe implements PipeTransform {
    transform(value:any):any{
        return value ? 'Vendido': 'Não Vendido';
    }
}
