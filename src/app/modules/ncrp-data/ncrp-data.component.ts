
import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule  } from "@angular/forms";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-ncrp-data',
  templateUrl: './ncrp-data.component.html',
  styleUrls: ['./ncrp-data.component.css']
})
export class NcrpDataComponent implements OnInit{

  currentDate = new Date();
  public ncrpDataForm!: FormGroup;


  newDataButton: boolean = true;
  updateDataButton: boolean = true;
  bulkDataButton: boolean = true;

  complainantAccordian: boolean = false;
  suspectDetailsAccordian: boolean = false;
  transactionDetailsAccordian: boolean = false;
  replyDetailsAccordian: boolean = false;

  constructor(private navbarService: NavBarService, protected formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.navbarService.setShowNavbar(true);

    this.ncrpDataForm = this.formBuilder.group({

      searchValue: new FormControl(),
      uploadFile: new FormControl(),

      crimePetitionNo: new FormControl(),
      categoryComplaint: new FormControl(),
      userId: new FormControl(),
      subCategoryComplaint: new FormControl(),
      additionalInfo: new FormControl(),
      incidentDateTime: new FormControl(),
      complaintDate: new FormControl(),


      // Comlainant Details
      comlaintantName: new FormControl(),
      comlaintantFatherName: new FormControl(),
      comlaintantMobileNo: new FormControl(),
      comlaintantEmailId: new FormControl(),

      comlaintantHouseNo: new FormControl(),
      comlaintantStreetName: new FormControl(),
      comlaintantAreaName: new FormControl(),
      comlaintantLandmark: new FormControl(),
      comlaintantTown: new FormControl(),
      comlaintantDistrict: new FormControl(),
      comlaintantState: new FormControl(),
      comlaintantPinCode: new FormControl(),
      comlaintantVictimRelation: new FormControl(),

      // Suspect Details
      suspectHouseNo: new FormControl(),
      suspectStreetName: new FormControl(),
      suspectAreaName: new FormControl(),
      suspectLandmark: new FormControl(),
      suspectTown: new FormControl(),
      suspectTehsill: new FormControl(),
      suspectDistrict: new FormControl(),
      suspectState: new FormControl(),
      suspectPinCode: new FormControl(),
      suspectPoliceStation: new FormControl(),
      suspectComplaintDetails: new FormControl(),

      // Transaction Details
      transactionBank: new FormControl(),
      transactionMerchant: new FormControl(),
      transactionAccNo: new FormControl(),
      transactionWalletId: new FormControl(),
      transactionCardDetails: new FormControl(),
      transactionAmount: new FormControl(),
      transactionRefNo: new FormControl(),
      transactionNo: new FormControl(),
      transactionDate: new FormControl(),
      transactionCompaintDate: new FormControl(),

      // Transaction Details
      replyActionMerchant: new FormControl(),
      replyAccNo: new FormControl(),
      replyTransactionDetails: new FormControl(),
      replyTransactionAmount: new FormControl(),
      replyPoliceStation: new FormControl(),
      replyRemarks: new FormControl(),

    });

  }


  addNcrpDataDetails(): void{

  }

  updateNcrpDataSearchValue(): void {

  }

  bulkUploadOfNcrpData(): void{

  }

  onChangeFileBulkUpload(event: any) {
    console.log(event.target.files);

    console.log(this.ncrpDataForm.value);

    if(this.ncrpDataForm.value.uploadFile != "" ||
      this.ncrpDataForm.value.uploadFile != null){
        this.bulkDataButton = false;
    }

  }

  seachValueToNcrpDataForm(): void{
    console.log(this.ncrpDataForm.value.searchValue);
    if(this.ncrpDataForm.value.searchValue != "" ||
        this.ncrpDataForm.value.searchValue != null){
          this.updateDataButton = false;
    }
  }

  submitNcrpData(): void{

  }


}
