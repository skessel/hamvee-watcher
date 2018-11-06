import { Component, OnInit } from '@angular/core';
import { SecurityService } from '../shared/service/security/security.service';
import { Route, Router, ActivatedRoute, Params } from '@angular/router';
import { ErrorStateMatcher } from '@angular/material';
import { FormGroupDirective, NgForm, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {

  public authenticated: boolean;
  public submitted: boolean;
  public formGroup: FormGroup;

  constructor(private securityService: SecurityService, private route: ActivatedRoute, private router: Router,
    private formBuilder: FormBuilder) {

    this.submitted = false;

    this.formGroup = this.formBuilder.group({
      loginFormInput : new FormControl('', [
        Validators.required,
      ]),

      passwordFormInput : new FormControl('', [
        Validators.required,
      ]),

      rememberMeFlag : new FormControl('', [
      ])
    });
  }

  ngOnInit() {
    if (this.securityService.isAuthenticated()) {
      this.router.navigateByUrl('/');
    }
  }

  public onSubmit(): void {

    this.submitted = true;

    const login: string = this.formGroup.get('loginFormInput').value;
    const password: string = this.formGroup.get('passwordFormInput').value;
    const rememberMe: boolean = this.formGroup.get('rememberMeFlag').value;

    this.authenticated = this.securityService.login(login, password, rememberMe);

    if (this.authenticated) {
      const queryParams: Params = this.route.snapshot.queryParams;
      const redirect: string = queryParams['redirect'] || '/';
      this.router.navigateByUrl(decodeURI(redirect));
    }
  }
}

