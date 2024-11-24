import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Festivo } from '../../core/entidades/Festivo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {

  url:string;

  constructor(private http:HttpClient) {
    this.url=`${environment.urlBase}festivos/obtener`;
  }

  public listar(year:any):Observable<Festivo[]>{
    return this.http.get<Festivo[]>(`${this.url}/${year}`);
  }
}
