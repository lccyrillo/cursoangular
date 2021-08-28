import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { Ativo } from './ativo.model';

@Injectable({
  providedIn: 'root'
})
export class AtivoService {

  private apiPath: string = "api/ativos";

  constructor(private http: HttpClient) { }
  getAll(): Observable<Ativo[]> {
    return this.http.get(this.apiPath).pipe(
      catchError(this.handleError),
      map(this.jsonDataToAtivos)
    )
  }


  getById(id: number): Observable<Ativo> {
    const url = `${this.apiPath}/${id}`;
    return this.http.get(url).pipe(
      catchError(this.handleError),
      map(this.jsonDataToAtivo)
    )
  }

  create(ativo: Ativo): Observable<Ativo> {
    return this.http.post(this.apiPath, ativo).pipe(
      catchError(this.handleError),
      map(this.jsonDataToAtivo)
    )
  }

  update(ativo: Ativo): Observable<Ativo> {
    const url = `${this.apiPath}/${ativo.id}`;
    return this.http.put(url, ativo).pipe(
      catchError(this.handleError),
      map( () => ativo)
    )
   }

   delete (id: number): Observable<any> {
    //alert(id);
    //alert(this.apiPath);
    const url = `${this.apiPath}/${id}`;

    //alert(url);
    return this.http.delete(url).pipe(
      catchError(this.handleError),
      map( () => null)
    )
  }



  // métidos privados

  private jsonDataToAtivos(jsonData: any[]):Ativo[] {
    const ativos: Ativo[] = [];
    jsonData.forEach(element => ativos.push(element as Ativo));
    return ativos;
  }


  private jsonDataToAtivo(jsonData: any):Ativo {
    return jsonData as Ativo;
  }


  private handleError(error: any): Observable<any>{
    console.log("Erro na requisição => ", error);
    return throwError(error);
  }



  
}
