import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Parc } from '../models/parc';

@Injectable({
  providedIn: 'root'
})
export class ParcService {

  constructor(private http : HttpClient) { }

  getAll = () : Observable<Parc[]> => {
    return this.http.get<Parc[]>(`${environment.urlSpring}/parcs`);
  }

  getById = (id : number) : Observable<Parc> => {
    return this.http.get<Parc>(`${environment.urlSpring}/parcs/${id}`);
  }

  getByNom = (nom : String) : Observable<Parc> => {
    return this.http.get<Parc>(`${environment.urlSpring}/parcs/nom/${nom}`);
  }

  //PATCH si vous avez mis PATCH dans le back
  //PUT si vous avez mis PUT dans le back
  update = (parc : Parc) : Observable<Parc> => {
    return this.http.patch<Parc>(`${environment.urlSpring}/parcs`, parc);
  }

  create = (parc : Parc) : Observable<Parc> => {
    return this.http.post<Parc>(`${environment.urlSpring}/parcs`, parc);
  }

  //Si vous avez fait le back avec un parc en BODY
  delete = (parc : Parc) : Observable<Parc> => {
    return this.http.request<Parc>('delete', `${environment.urlSpring}/parcs`, { body : parc});
  }

  //Si vous avez fait un back avec un deleteById
  deleteById = (parc: Parc) : Observable<Parc> => {
    return this.http.delete<Parc>(`${environment.urlSpring}/parcs/${parc.id}`)
  }
}
