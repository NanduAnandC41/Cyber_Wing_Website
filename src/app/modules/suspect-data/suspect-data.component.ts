import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { DatePipe } from "@angular/common";



@Component({
  selector: 'app-suspect-data',
  templateUrl: './suspect-data.component.html',
  styleUrls: ['./suspect-data.component.css']
})
export class SuspectDataComponent implements OnInit{

  searchValue: string = '';
  currentDate = new Date();
  public suspectDataForm!: FormGroup;

  newDataButton: boolean = true;
  updateDataButton: boolean = true;
  bulkDataButton: boolean = true;


  constructor(private navbarService: NavBarService, protected formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.navbarService.setShowNavbar(true);

    this.suspectDataForm = this.formBuilder.group({

      searchValue: new FormControl(),
      uploadFile: new FormControl(),

      modeOfOperand: new FormControl(),
      firPtNo: new FormControl(),
      sectionOfLaw: new FormControl(),
      policeStation: new FormControl(),

      fullName: new FormControl(),
      fatherName: new FormControl(),
      fullAddress: new FormControl(),

      suspectPhNo: new FormControl(),
      suspectUsedImes: new FormControl(),
      suspectCaf: new FormControl(),     // Customer Application Form
      suspectBpartyNos: new FormControl(),


      bankAcctNo: new FormControl(),
      bankIfsc: new FormControl(),
      upIds: new FormControl(),


      aadharNo: new FormControl(),
      rationCard: new FormControl(),


      drivingLicenseNo: new FormControl(),
      vehicleDetails: new FormControl(),
      panCardNo: new FormControl(),
      emaiIdPersonal: new FormControl(),
      facebookDetails: new FormControl(),
      instagramId: new FormControl(),
      whatsAppDetails: new FormControl(),
      otherSocialMediaActs: new FormControl(),


      photosOfSuspect: new FormControl(),
      caseScreenShots: new FormControl(),
      websiteAddressSuspectCreated: new FormControl(),
      dateOfArrest: new FormControl(),
      previousCrimeHistory: new FormControl(),
      remarks: new FormControl(),
    }
  );

  }

  suspectSearchValue(): void {
    console.log("Search Value : " + this.searchValue);
  }

  addSuspectDataDetails(): void {

  }

  updateSuspectSearchValue(): void{

  }

  bulkUploadOfSuspectData(): void{

  }

  onChangeFileBulkUpload(event: any) {
    console.log(event.target.files);

    console.log(this.suspectDataForm.value);

    if(this.suspectDataForm.value.uploadFile != "" ||
      this.suspectDataForm.value.uploadFile != null){
        this.bulkDataButton = false;
    }

  }

  seachValueToSuspectDataForm(): void{
    console.log(this.suspectDataForm.value.searchValue);
    if(this.suspectDataForm.value.searchValue != "" ||
        this.suspectDataForm.value.searchValue != null){
          this.updateDataButton = false;
    }
  }

  submitSuspectData():void {
    console.log("Submit Suspect Data");
  }

}
