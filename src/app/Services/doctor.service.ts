import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private url ="http://localhost:8083/doctor";
  private header;
  constructor( private http:HttpClient) {
    this.header = new HttpHeaders()
    .set('Content-Type','application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Credentials','true')
   }

  getDoctores() {
    return this.http.get<any>(this.url);
  }

  postDoctor(doctor){
    return this.http.post<any>( this.url, JSON.stringify(doctor) , {headers:this.header}).subscribe(
        (data:any) => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
          );
    }
}
