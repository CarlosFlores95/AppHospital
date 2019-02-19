export class Doctor{
    private birth_name:Date;
    private cedula:string;
    private contra:string;
    private especialidad: string;
    private nombre: string;
    private nombre_usuario

    constructor(birth_name, cedula, contra, especialidad, nombre, nombre_usuario){
      this.birth_name = birth_name;
      this.cedula = cedula;
      this.contra = contra;
      this.especialidad = especialidad;
      this.nombre = nombre;
      this.nombre_usuario = nombre_usuario;
    }
  }

  export class Cita {
    private consultorio:number; 
    private fecha:string;
    private doctor:number;
    private paciente:number;

    constructor(consultorio, fecha, doctor, paciente){
      this.consultorio = consultorio;
      this.fecha = fecha;
      this.doctor = doctor;
      this.paciente = paciente;
    }
  }