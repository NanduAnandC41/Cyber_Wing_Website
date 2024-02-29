import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule  } from "@angular/forms";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit{
  public creatUserForm!: FormGroup;
  constructor(private navbarService: NavBarService, protected formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.navbarService.setShowNavbar(true);

    this.creatUserForm = this.formBuilder.group({

      userName: new FormControl(),
      userPhNo: new FormControl(),
      userEmailId: new FormControl(),
      stationName: new FormControl(),
      userPassword: new FormControl(),
      stationNo: new FormControl(),
      stationContactNo: new FormControl(),
      generalNo: new FormControl(),
    }
  );


  }


  createUser(): void{
    console.log("User Form Data : ");
  }

}
