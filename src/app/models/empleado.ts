import { Recibo } from "./recibo";
export class Empleado {
    _id?: string;
    nombre: string;
    apellido: string;
    direccion: string;
    ciudad: string;
    telefono: string;
    recibo:Recibo;
   
    constructor(nombre: string, apellido: string, direccion: string, ciudad: string, telefono: string, recibo: Recibo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.telefono = telefono;
        this.recibo= recibo

    }
}