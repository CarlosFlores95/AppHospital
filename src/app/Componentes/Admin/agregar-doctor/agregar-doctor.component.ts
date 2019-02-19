import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../Services/doctor.service';
import { Doctor } from '../../../Beans/Beans';

@Component({
  selector: 'app-agregar-doctor',
  templateUrl: './agregar-doctor.component.html',
  styleUrls: ['./agregar-doctor.component.css']
})
export class AgregarDoctorComponent implements OnInit {

  doctorData:any;

  constructor(private doctores:DoctorService) {
  }

  ngOnInit() {
  }
  ////Crear un nuevo Doctor
  private doctor:Doctor;

  crearDoctor(birth_name, cedula, contra, especialidad, nombre, nombre_usuario){
    this.doctor = new Doctor(birth_name, cedula, contra, especialidad, nombre, nombre_usuario);
    console.log(this.doctor);
    this.doctores.postDoctor(this.doctor);
    
  }

}
