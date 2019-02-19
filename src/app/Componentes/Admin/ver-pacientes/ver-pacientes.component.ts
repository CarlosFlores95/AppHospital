import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../Services/paciente.service';


@Component({
  selector: 'app-ver-pacientes',
  templateUrl: './ver-pacientes.component.html',
  styleUrls: ['./ver-pacientes.component.css']
})
export class VerPacientesComponent implements OnInit {

  pacientesData:any;
  constructor(private pacientes:PacienteService) { }

  ngOnInit() {
    this.pacientes.getPacientes().subscribe(
      data => {
        this.pacientesData = data;
        console.log(this.pacientesData);

      }
    )

  }

}
