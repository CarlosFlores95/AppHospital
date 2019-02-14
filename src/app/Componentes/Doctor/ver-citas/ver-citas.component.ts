import { Component, OnInit } from '@angular/core';
import { CitaService} from '../../../Services/cita.service';

@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.component.html',
  styleUrls: ['./ver-citas.component.css']
})
export class VerCitasComponent implements OnInit {
  
  listaCitas:any;
  constructor(private citas:CitaService) { }

  ngOnInit() {
    this.citas.getCitas().subscribe(
      data => {
        this.listaCitas = data;
        console.log(this.listaCitas);
        
      }
    )
  }

}
