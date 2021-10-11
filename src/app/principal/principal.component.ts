import { Component, OnInit, Input } from '@angular/core';

import { Listadomascota } from 'src/app/models/listadomascota';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { idText } from 'typescript';


@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  
 constructor(     
  )
  { 
   
  }

  ngOnInit(): void {
    
  }
  rows: Listadomascota [] = [];
  onSubmit(form: NgForm) {
    var test: Listadomascota = {nombre: form.value.nombrecompleto, raza: form.value.raza, edad: form.value.edad, id: this.rows.length} ;  
    this.rows.push(test);
  }

  Borrar(id: number){
    this.rows= this.rows.filter(item => item.id !== id)
  }

  }
  
  

