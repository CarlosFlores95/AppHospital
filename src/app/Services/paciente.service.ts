import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  
  
  private url = "http://localhost:8083/paciente";
  private header;
  constructor(private http:HttpClient) { 
    this.header = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Credentials','true')
  }

  getPacientes(){
    console.log("Entra");
    return this.http.get<any>(this.url, {headers:this.header});
  }
}
