import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../../Services/doctor.service';

@Component({
  selector: 'app-ver-doctores',
  templateUrl: './ver-doctores.component.html',
  styleUrls: ['./ver-doctores.component.css']
})
export class VerDoctoresComponent implements OnInit {

  doctoresData:any;
  constructor(private doctores:DoctorService) { }

  ngOnInit() {
    this.doctores.getDoctores().subscribe(
      data => {
        this.doctoresData = data;
        console.log(this.doctoresData);
        
      }
    )
  }

}
