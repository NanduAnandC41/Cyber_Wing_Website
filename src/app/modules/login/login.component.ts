import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
    private navbarService: NavBarService) { }

  ngOnInit(): void {

    this.navbarService.setShowNavbar(false); 

    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }


  get formHold() { return this.loginForm.controls; }


  onSubmit() {
    this.submitted = true;



    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;

  }

  reloadPage(): void {
    window.location.reload();
  }

  createUser(): void{
    console.log("Function has been called");
    this.router.navigateByUrl("/create-user");
  }


}
