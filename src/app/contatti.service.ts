import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rejects } from 'assert';
import { promise } from 'protractor';
import { Observable } from 'rxjs';
import { Persona } from 'src/persona';

@Injectable({
  providedIn: 'root'
})
export class ContattiService {

  Url="http://localhost:3000/Persona";

  constructor(private httpclient:HttpClient) { }

  getAll():Observable<Persona[]>{
  return this.httpclient.get<Persona[]>(this.Url)
  }
  post(persona:Persona):Observable<Persona>{
    return this.httpclient.post<Persona>(this.Url,persona)
  }
  put(id:number,persona:Persona):Observable<Persona>{
    return this.httpclient.put<Persona>(this.Url+"/"+id,persona)
  }
  cancella(id:number):Observable<Persona>{
    return this.httpclient.delete<Persona>(this.Url+"/"+id)
  }
  getbyId(id:number):Observable<Persona>{
    return this.httpclient.get<Persona>(this.Url+"/"+id)
  }
    async getPromise():Promise<any>{
      //return this.getAll().toPromise()
      let response = await fetch(this.Url)
      return await response.json()
  }
}
