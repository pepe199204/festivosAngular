import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Festivo } from '../../core/entidades/Festivo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FestivoServiceVerificar {

  url:string;

  constructor(private http:HttpClient) {
    this.url=`${environment.urlBase}festivos/verificar`;
  }

  public verificar(year:any, month: any, day: any):Observable<any>{
    return this.http.get<any>(`${this.url}/${year}/${month}/${day}`);
  }
}
