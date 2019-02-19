import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private url = "http://localhost:8083/cita";
  private header;
  constructor( private http:HttpClient ) {
    this.header = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Credentials','true')
   }

  getCitas() {
    return this.http.get<any>(this.url, {headers:this.header});
  }
  
  postCita(cita){
    return this.http.post<any>(this.url, JSON.stringify(cita), {headers: this.header}).subscribe(
      (data:any) => {
        console.log(data);
      }, error =>{
        console.log(error);

      }  
    );
    
  }
}
