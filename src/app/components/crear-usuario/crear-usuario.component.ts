import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/usuario';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  usuarios: Array<User> = [];
  usuariosApi: any;
  form: FormGroup
  

  constructor( private toastr: ToastrService, private loginService: LoginService, private fb: FormBuilder, private router: Router ) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  getUser() {
    this.loginService.getUsers().subscribe(usuarios => {
    this.usuariosApi = usuarios;

    for (let us of this.usuariosApi) {
      let p = new User(
        us._id,
        us._usuario,
        us._password,
      )
      this.usuarios.push(p)
    }
    })
  }

  eliminarUsuario(usuario: any) {
    this.usuarios = this.usuarios.filter((h) => h !== usuario._usuario);
    this.loginService.eliminarUsuario(usuario).subscribe( a => {
      window.location.reload();
    })
  }

  addUser(
    _usuario: string,
    _password: string,
  ) {
   const doc: any = {
    _usuario: _usuario,
    _password: _password,
   }

   this.loginService.addUsuario(doc).subscribe( a => {
     this.usuariosApi = doc;
     this.usuarios.push(this.usuariosApi);
     window.location.reload();
   });
  }

  ngOnInit(): void {
    this.getUser();
  }

}
