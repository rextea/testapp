import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;
  error = '';

  constructor(private formBuilder: FormBuilder, public router: Router, private authenticationService: AuthenticationService ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
  });
  }

  onSubmit() {
    this.error = '';
    if (this.registerForm.invalid) {
      console.log(this.registerForm.get('password').errors);
      return;
    }
    console.log(this.registerForm.value);

    this.authenticationService.signup(this.registerForm.controls.email.value, this.registerForm.controls.password.value)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate(['dashboard']);
        },
        error => {
            this.error = error.error.error;
        });
  }

}
