import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordMatchValidator } from '../../../shared/validators/password_match_validator';
import { IUserRegister } from '../../../shared/interfaces/IUserRegister';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  returnUrl = '';

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['test', Validators.required],
      email: ['Test@gmail.com', [Validators.required, Validators.email]],
      address: ['Testaddress 1235', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      consultant: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: PasswordMatchValidator('password', 'confirmPassword')
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/';
  }

  get f() { return this.registerForm.controls; } 

  onSubmit(){
    this.submitted = true;
    if (this.registerForm.invalid) {
      console.log(this.registerForm.invalid);
      console.log(this.registerForm.errors);
      console.log(this.registerForm.value);
      console.log(this.registerForm.controls);
      console.log(this.registerForm);
      return;
    }
    const fv = this.registerForm.value;
    const user :IUserRegister = {
      name: fv.name,
      email: fv.email,
      password: fv.password,
      confirmPassword: fv.confirmPassword,
      address: fv.address,
      isConsultant: fv.consultant === 'Berater' ? true : false
    };
    this.userService.register(user).subscribe(_ => {
        this.router.navigateByUrl(this.returnUrl);
      },
      error => {
        console.log(error);
      }
    )
  }
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
