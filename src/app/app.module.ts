import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



//Rutas
import { AppRoutingModule } from './app-routing.module';
import { RUTAS_INICIO } from './Rutas/app.acceso';


//Componentes
import { AppComponent } from './app.component';
import { VerCitasComponent } from './Componentes/Doctor/ver-citas/ver-citas.component';
import { HeaderComponent } from './Estatico/header/header.component';
import { FooterComponent } from './Estatico/footer/footer.component';
import { BodyComponent } from './Estatico/body/body.component';
import { AgregarDoctorComponent } from './Componentes/Admin/agregar-doctor/agregar-doctor.component';
import { AgregarPacienteComponent } from './Componentes/Paciente/agregar-paciente/agregar-paciente.component';
import { VerDoctoresComponent } from './Componentes/Admin/ver-doctores/ver-doctores.component';
import { AgregarCitaComponent } from './Componentes/Paciente/agregar-cita/agregar-cita.component';
import { VerPacientesComponent } from './Componentes/Admin/ver-pacientes/ver-pacientes.component';


//Servicios
import { CitaService } from './Services/cita.service';
import { DoctorService } from './Services/doctor.service';
import { PacienteService } from './Services/paciente.service';



@NgModule({
  declarations: [
    AppComponent,
    VerCitasComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AgregarDoctorComponent,
    AgregarPacienteComponent,
    VerDoctoresComponent,
    AgregarCitaComponent,
    VerPacientesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(RUTAS_INICIO, {useHash: false})
  ],
  providers: [PacienteService, DoctorService, CitaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
