import { Component, OnInit } from '@angular/core';
import { HospitalService, UsuarioService } from '../../services/service.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { Hospital } from '../../models/hospital.model';
declare function init_plugins();

@Component({
  selector: 'app-crear-hospital',
  templateUrl: './crear-hospital.component.html'
})
export class CrearHospitalComponent implements OnInit {

  formHosp: FormGroup;
  cadenaTxt: string;

  constructor(
    public _hospitalService: HospitalService,
    public _usuarioService: UsuarioService,
    public _modalUploadService: ModalUploadService) { }

  ngOnInit() {
    init_plugins();
    this.formHosp = new FormGroup({
      nombre: new FormControl( null , Validators.required )
    });
  }
  registrarHospital() {
    if ( this.formHosp.invalid ) {
      return;
    }
    this.cadenaTxt = this.formHosp.value.nombre;

    this._hospitalService.crearHospital(this.cadenaTxt)
        .subscribe( creado => {
          console.log('He clickado para crear hospital', creado);
         });
  }
}
