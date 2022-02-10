import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/usuario';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  form: FormGroup;
  usuarios: Array<User> = [];
  usuariosApi: any

  constructor(private fb: FormBuilder, private loginService: LoginService, private toastr: ToastrService, private router: Router) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    })
   }

   logi() {
     const usario = this.form.value.usuario;
     const password = this.form.value.password;
     console.log(usario)
     console.log(password)
     this.loginService.getUsers().subscribe(usuarios => {
     this.usuariosApi = usuarios;

     for (let us of this.usuariosApi) {
        if (usario == us._usuario && password == us._password) {
          this.toastr.success('Login correcto!', 'Gracias por su visita');
          this.router.navigate(['/'])
        }else {
            console.log("Usuario y contraseña incorrecto")
        }
     }
     })
   }


  ngOnInit(): void {
  }

}
[]