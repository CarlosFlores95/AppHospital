import { Component, OnInit } from '@angular/core';
import { CitaService } from '../../../Services/cita.service';
import { Cita } from '../../../Beans/Beans';


@Component({
  selector: 'app-agregar-cita',
  templateUrl: './agregar-cita.component.html',
  styleUrls: ['./agregar-cita.component.css']
})
export class AgregarCitaComponent implements OnInit {

  private citasData:any;
  constructor(private citas:CitaService) { }

  ngOnInit() {
  }

  private cita:Cita;
  crearCita(consultorio, fecha, doctor, paciente){
    this.cita = new Cita(consultorio, fecha, doctor, paciente);
    alert(this.cita);
    this.citas.postCita(this.cita);
    

  }

}
