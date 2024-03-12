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

  newDataButton: boolean = true;
  updateDataButton: boolean = true;
  bulkDataButton: boolean = true;


  constructor(private navbarService: NavBarService, protected formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.navbarService.setShowNavbar(true);

    this.suspectAcctDetailsForm = this.formBuilder.group({

      searchValue: new FormControl(),
      uploadFile: new FormControl(),

      suspectName: new FormControl(),
      suspectAcctNo: new FormControl(),
      suspectPhNo: new FormControl(),
      suspectUpIds: new FormControl(),
      suspectUrls: new FormControl(),
      suspectRemarks: new FormControl(),

    });


  }



  addSupectAccountDetails(): void{

  }

  updateSupectAccountSearchValue(): void{

  }

  bulkUploadOfSuspectAccountData(): void{

  }

  onChangeFileBulkUpload(event: any) {
    console.log(event.target.files);

    console.log(this.suspectAcctDetailsForm.value);

    if(this.suspectAcctDetailsForm.value.uploadFile != "" ||
      this.suspectAcctDetailsForm.value.uploadFile != null){
        this.bulkDataButton = false;
    }

  }

  seachValueToSuspectAccountDataForm():void{
    console.log(this.suspectAcctDetailsForm.value.searchValue);
    if(this.suspectAcctDetailsForm.value.searchValue != "" ||
        this.suspectAcctDetailsForm.value.searchValue != null){
          this.updateDataButton = false;
    }
  }

  submitSuspectAccountInformation(): void{

  }
}
