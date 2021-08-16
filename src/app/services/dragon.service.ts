import { Dragon } from './../models/dragon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DragonService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll(): Observable<Dragon[]>{
    return this.http.get<Dragon[]>(this.baseUrl)
  }

  delete(id: any):Observable<void>{
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<void>(url);
  }

  create(dragon: Dragon):Observable<Dragon>{
    return this.http.post<Dragon>(this.baseUrl, dragon);
  }

  message(msg: String): void{
    this.snack.open(`${msg}`,'OK', {
      horizontalPosition: 'start',
      verticalPosition: 'top',
      duration: 4000
    })
  }
}
