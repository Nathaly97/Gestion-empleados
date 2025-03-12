import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  selectedEmpleado: Empleado;
  empleados: Empleado[];
  readonly URL_API = 'http://localhost:3000/api/empleados';

  constructor(private http: HttpClient) {
    this.selectedEmpleado = new Empleado();
    this.empleados = [];
  }

  getEmpleados() {
    return this.http.get<Empleado[]>(this.URL_API);
  }

  postEmpleado(empleado: Empleado) {  // 🔹 Corregido: postEmpleado en minúscula
    return this.http.post(this.URL_API, empleado);
  }

  putEmpleado(empleado: Empleado) {   // 🔹 Corregido: parámetro en minúscula
    return this.http.put(`${this.URL_API}/${empleado._id}`, empleado);
  }

  deleteEmpleado(_id: string) {
    return this.http.delete(`${this.URL_API}/${_id}`);
  }
}

//Este código define un servicio en Angular llamado EmpleadoService, que se encarga de la comunicación con la API backend para realizar operaciones CRUD (Create, Read, Update, Delete) sobre los empleados.

