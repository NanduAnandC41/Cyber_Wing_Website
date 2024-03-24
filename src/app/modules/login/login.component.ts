import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { NavBarService } from '../../services/nav-bar.service';
import { AuthService } from '../../auth-services/auth-service.service';
import { TokenStorageService } from '../../auth-services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  loginForm!: FormGroup;
  loading = false;
  submitted = false;

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private navbarService: NavBarService,
    private elementRef: ElementRef,
    private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    this.navbarService.setShowNavbar(false);

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  ngAfterViewInit(): void {
      // const eleDom: HTMLElement = this.elementRef.nativeElement;
      // const classElement = eleDom.querySelectorAll('modules-body');
      // classElement.
  }


  get formHold() { return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;

    this.loading = true;
    console.log("form values : ", this.loginForm.value);

    this.authService.login(this.loginForm.value.username,
        this.loginForm.value.password).subscribe(res => {
        this.tokenStorage.saveToken(res.accessToken);
        this.tokenStorage.saveUser(res);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
    },
    err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    });

  }

  loggedIn(): void{
    alert("Function has been called");
    console.log("Form Values : ", this.loginForm.value);
    this.submitted = true;
    if (this.loginForm.value.username == null ||
      this.loginForm.value.username === '' ||
      this.loginForm.value.password == null ||
      this.loginForm.value.password === '') {
      return;
    }
    console.log("Form Values : ", this.loginForm.value);
    this.loading = true;

    this.authService.login(this.loginForm.value.username,
      this.loginForm.value.password).subscribe(res => {
      this.tokenStorage.saveToken(res.accessToken);
      this.tokenStorage.saveUser(res);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.reloadPage();
    },
    err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    });

  }

  reloadPage(): void {
    window.location.reload();
  }

  createUser(): void{
    console.log("Function has been called");
    this.router.navigateByUrl("/create-user");
  }


}
