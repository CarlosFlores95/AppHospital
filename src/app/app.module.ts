import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


//Rutas
import { AppRoutingModule } from './app-routing.module';
import { RUTAS_INICIO } from './Rutas/app.acceso';


//Componentes
import { AppComponent } from './app.component';
import { VerPacientesComponent } from './Componentes/Paciente/ver-pacientes/ver-pacientes.component';
import { VerCitasComponent } from './Componentes/Doctor/ver-citas/ver-citas.component';
import { InicioPacienteComponent } from './Componentes/Paciente/inicio-paciente/inicio-paciente.component';
import { HeaderComponent } from './Estatico/header/header.component';
import { FooterComponent } from './Estatico/footer/footer.component';
import { BodyComponent } from './Estatico/body/body.component';
import { AgregarDoctorComponent } from './Componentes/Admin/agregar-doctor/agregar-doctor.component';
import { AgregarPacienteComponent } from './Componentes/Paciente/agregar-paciente/agregar-paciente.component';


//Servicios


@NgModule({
  declarations: [
    AppComponent,
    VerPacientesComponent,
    VerCitasComponent,
    InicioPacienteComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    AgregarDoctorComponent,
    AgregarPacienteComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(RUTAS_INICIO, {useHash: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
