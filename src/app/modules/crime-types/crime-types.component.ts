import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-crime-types',
  templateUrl: './crime-types.component.html',
  styleUrls: ['./crime-types.component.css']
})
export class CrimeTypesComponent implements OnInit{

  searchValue: string = '';
  currentDate = new Date();

  public crimeTypesForm!: FormGroup;
  constructor(private navbarService: NavBarService, protected formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.navbarService.setShowNavbar(true);

    this.crimeTypesForm = this.formBuilder.group({

      // typeOfSubscriber: new FormControl(),
      // mobileNoAllotted: new FormControl(),
      // imsiNo: new FormControl(),
      // emailId: new FormControl(),
      // customerName: new FormControl(),



    });


  }




}
