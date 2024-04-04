import { Component, OnInit } from '@angular/core';
import { RouterLink} from '@angular/router';
import { EmpleadosServiceService } from '../../services/empleados-service.service';
import { Empleado } from '../../models/empleado';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-recibos',
  standalone: true,
  imports:  [RouterLink, NgFor, NgIf, CurrencyPipe],
  templateUrl: './listar-recibos.component.html',
  styleUrl: './listar-recibos.component.css'
})
export class ListarRecibosComponent implements OnInit{
  listEmpleados: Empleado[]=[]
  id ="660d49f7e2e7b6d673305b00"
  constructor(private _EmpleadosServiceService: EmpleadosServiceService, private toastr:ToastrService){}

  
ngOnInit(): void {
  this.obtenerEmpleados()
}

obtenerEmpleados() {
  
  this._EmpleadosServiceService.obtenerEmpleado(this.id).subscribe({ next: data =>  {
    
    this.listEmpleados = data}
    ,error: e => console.error})
  }
}