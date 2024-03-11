import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-suspect-account-details',
  templateUrl: './suspect-account-details.component.html',
  styleUrls: ['./suspect-account-details.component.css']
})
export class SuspectAccountDetailsComponent implements OnInit{

  searchValue: string = '';
  currentDate = new Date();

  public suspectAcctDetailsForm!: FormGroup;
  constructor(private navbarService: NavBarService, protected formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.navbarService.setShowNavbar(true);

    this.suspectAcctDetailsForm = this.formBuilder.group({

      // typeOfSubscriber: new FormControl(),
      // mobileNoAllotted: new FormControl(),
      // imsiNo: new FormControl(),
      // emailId: new FormControl(),
      // customerName: new FormControl(),



    });


  }




}
