import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Listadomascota } from 'src/app/models/listadomascota';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
    var test: Listadomascota = {nombre: form.value.nombrecompleto, raza: form.value.raza, edad: form.value.edad} ;  
    this.rows.push(test);
  }


  }
  
  

