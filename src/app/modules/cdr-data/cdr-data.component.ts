import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';

import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule  } from "@angular/forms";

@Component({
  selector: 'app-cdr-data',
  templateUrl: './cdr-data.component.html',
  styleUrls: ['./cdr-data.component.css']
})
export class CDRDataComponent implements OnInit{

  public cdrDataForm!: FormGroup;

  constructor(private navbarService: NavBarService, protected formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.navbarService.setShowNavbar(true); 

    this.cdrDataForm = this.formBuilder.group({

        fullName: new FormControl(),
        sonDaughterWifeOf: new FormControl(),       
        dateOfBirth: new FormControl(),
        fullAddress: new FormControl(),
        aadharNo: new FormControl(),
        mobileNo: new FormControl(),
        emaiIdPersonal: new FormControl(),
        emaiIdOfficial: new FormControl(),
        professionJob: new FormControl(),
        prevJobDetails: new FormControl(),
        monthlyIncome: new FormControl(),
        vehicleDetails: new FormControl(),
        bankAccountDetails: new FormControl(),
        panCardNo: new FormControl(),
        drivingLicenseNo: new FormControl(),
        passPortDetails: new FormControl(),
        friendDetails: new FormControl(),
        facebookDetails: new FormControl(),
        twittedId: new FormControl(),
        instagramId: new FormControl(),
        youTubeDetails: new FormControl(),
        whatsAppDetails: new FormControl(),
        telegramNo: new FormControl(),
        imoNo: new FormControl(),
        tiktokId: new FormControl(),
        heloId: new FormControl(),
        linkedInId: new FormControl(),
        previousCases: new FormControl(),
        photoDetails: new FormControl(),



      }
    );
  }

}
