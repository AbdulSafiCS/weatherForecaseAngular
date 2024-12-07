import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule , FormControl, FormGroup, RequiredValidator, UntypedFormGroup, Validators} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Router, RouterLink } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from './auth.service';
import { LoginRequest } from './login-request';
import { LoginResponse } from './login-response';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, RouterLink, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

ngOnInit(): void {
  this.form = new FormGroup({
    userName: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required)
  })
}
form!: UntypedFormGroup
onSubmit(): void {
  var loginRequest: LoginRequest = {
    username: this.form.controls["userName"].value,
    password: this.form.controls["password"].value
  };

  var loginResponse : LoginResponse;
  this.authService.login(loginRequest).subscribe(
    {
      next: result => {
        loginResponse = result;
        if (result.success) {
          localStorage.setItem("tokenValue", result.token);
          this.router.navigate(["/"]);
        } else {
          
        }
      },
      error: e => console.error(e)
    }
      );
}
constructor(private authService: AuthService, private router: Router){}



}
