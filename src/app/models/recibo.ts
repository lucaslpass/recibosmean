export class Recibo {
    _id?: string;
    path: string;
    mes: string;
    anio: string;
    fechaDePago: string;
    tipoDeRecibo: string;

    constructor(path: string, mes : string, anio: string, fechaDePago: string, tipoDeRecibo: string){
        this.path = path;
        this.mes = mes;
        this.anio = anio;
        this.fechaDePago = fechaDePago;
        this.tipoDeRecibo = tipoDeRecibo

    }
}