import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-sdr-data',
  templateUrl: './sdr-data.component.html',
  styleUrls: ['./sdr-data.component.css']
})
export class SdrDataComponent implements OnInit{

  searchValue: string = '';
  currentDate = new Date();
  public sdrDataForm!: FormGroup;
  constructor(private navbarService: NavBarService, protected formBuilder: FormBuilder) { }


  ngOnInit(): void {
    this.navbarService.setShowNavbar(true);

    this.sdrDataForm = this.formBuilder.group({

      serialNo: new FormControl(),
      telephoneNo: new FormControl(),
      alternatePhNo: new FormControl(),
      subscriberName: new FormControl(),
      dateOfBirth: new FormControl(),


      sonDaughterWifeOf: new FormControl(),


      localAddress: new FormControl(),
      permanentAddress: new FormControl(),
      emaiIdPersonal: new FormControl(),

      gender: new FormControl(),
      nationality: new FormControl(),
      profession: new FormControl(),
      panCardNo: new FormControl(),
      photosOfIdProofs: new FormControl(),
      cafSerailNo: new FormControl(),
      idProofsDetails: new FormControl(),
      subscriberStatus: new FormControl(),
      connectionType: new FormControl(),
      localReference: new FormControl(),
      customerPhNo: new FormControl(),
      longitude: new FormControl(),
      latitude: new FormControl(),
      imsiNo: new FormControl(),
      serviceProvider: new FormControl(),
      connectionStatus: new FormControl(),
      previousServiceProvider: new FormControl(),
      saleCode: new FormControl(),
      nameOfSale: new FormControl(),
      salesAgentName: new FormControl(),
      salesAgentAddress: new FormControl(),
      agentSignature: new FormControl(),
      nameOfActivation: new FormControl(),
      dateTimeSimActivation: new FormControl(),
      transactionId: new FormControl(),
      customerPhoto: new FormControl(),
      agentAadharNo: new FormControl(),
      kycAutherization: new FormControl(),
      kycDeclaration: new FormControl(),
      posAuthentication: new FormControl(),
      circle: new FormControl(),
      policeStation: new FormControl(),
      remarks: new FormControl(),

      }
    );

  }

  sdrDataSearchValue(): void {
    console.log("Search Value : " + this.searchValue);
  }


  submitSdrInformation():void {
    console.log("Submit SDR Data");
  }

}
