import { Component, OnInit } from '@angular/core';
import {BrowserModule}from '@angular/platform-browser'
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  registro=[];
  cliente:any;
  nombre:string;
  dui:string;
  mascota:string;
  tratamiento:string;
  medicamento:string;
  costo:number;
  nvisita:number;
  contador:number;
  descuento:number;

  constructor() { }

  ngOnInit() {
    this.nombre='';
    this.dui='';
    this.contador=0;
    this.mascota='';
    this.tratamiento='';
    this.medicamento='';
    this.costo=0;
    this.nvisita=1;
  }
   ingresar(){
     
     
    if(this.nvisita>=2 && this.nvisita <=4) {
       this.descuento= this.costo* 0.05;
       let costoF = this.costo - this.descuento;
       this.cliente={"nombre":this.nombre,"dui":this.dui,"mascota":this.mascota,"tratamiento":this.tratamiento,"medicamento":this.medicamento,"costo":costoF,"nvisita":this.nvisita};
      this.registro.push(this.cliente);
       this.nvisita++;
       this.contador++;


       
     } else if(this.nvisita>4) {
       this.descuento= this.costo* 0.1;
       let costoF = this.costo - this.descuento;
       this.cliente={"nombre":this.nombre,"dui":this.dui,"mascota":this.mascota,"tratamiento":this.tratamiento,"medicamento":this.medicamento,"costo":costoF,"nvisita":this.nvisita};
       this.registro.push(this.cliente);
       this.nvisita++;
       this.contador++;
       
     }else{
      this.cliente={"nombre":this.nombre,"dui":this.dui,"mascota":this.mascota,"tratamiento":this.tratamiento,"medicamento":this.medicamento,"costo":this.costo,"nvisita":this.nvisita};
      this.registro.push(this.cliente);
     
      this.nvisita++;
      this.contador++;
     }
    }

}
