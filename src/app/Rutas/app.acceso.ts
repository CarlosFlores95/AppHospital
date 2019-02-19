import { Routes, RouterModule } from '@angular/router';

import { BodyComponent } from '../Estatico/body/body.component';
import { VerCitasComponent } from '../Componentes/Doctor/ver-citas/ver-citas.component';
import { AgregarDoctorComponent } from '../Componentes/Admin/agregar-doctor/agregar-doctor.component';
import { AgregarPacienteComponent } from '../Componentes/Paciente/agregar-paciente/agregar-paciente.component';
import { VerDoctoresComponent } from '../Componentes/Admin/ver-doctores/ver-doctores.component';
import { AgregarCitaComponent } from '../Componentes/Paciente/agregar-cita/agregar-cita.component';
import { VerPacientesComponent } from '../Componentes/Admin/ver-pacientes/ver-pacientes.component';



export const RUTAS_INICIO:Routes = [
    {path:'', component:BodyComponent},

    //rutas del admin
    {path:'admin/registro-doctor', component:AgregarDoctorComponent},
    {path:'admin/registro-paciente', component:AgregarPacienteComponent},
    {path:'admin/ver-doctores', component:VerDoctoresComponent},
    {path:'admin/ver-pacientes', component: VerPacientesComponent},
    //rutas del doctor
    {path:'doctor/citas', component:VerCitasComponent},

    //rutas de paciente
    {path:'paciente/crear-cita', component:AgregarCitaComponent}

];
