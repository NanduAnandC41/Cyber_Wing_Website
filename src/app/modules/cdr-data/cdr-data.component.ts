import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';
import { cdrInformation } from '../../models/state.constants';
import { FormBuilder, FormControl, FormControlName, FormGroup, FormsModule, ReactiveFormsModule  } from "@angular/forms";

@Component({
  selector: 'app-cdr-data',
  templateUrl: './cdr-data.component.html',
  styleUrls: ['./cdr-data.component.css']
})
export class CDRDataComponent implements OnInit{

  public cdrDataForm!: FormGroup;
  dtOptions: DataTables.Settings = {};
  crimeData: cdrInformation[] = [];


  searchValue: string = "";
  newDataButton: boolean = true;
  updateDataButton: boolean = true;
  bulkDataButton: boolean = true;

  constructor(private navbarService: NavBarService, protected formBuilder: FormBuilder) {


    // this.http.get('https://www.therichpost.com/testjsonapi/users/').subscribe(data => {

    // this.data = data;
    //     setTimeout(()=>{
    //       $('#datatableexample').DataTable( {
    //         pagingType: 'full_numbers',
    //         pageLength: 5,
    //         processing: true,
    //         lengthMenu : [5, 10, 25]
    //     } );
    //     }, 1);
    //           }, error => console.error(error));
    //   }


  }

  ngOnInit(): void {

    this.crimeData = [
      {
        crimeNo : 101,
        aParty: "Hyundai",
        bParty: "Elantra",
        dateTime: "2024-01-03:13:26:00"
      },
      {
        crimeNo : 102,
        aParty: "Toyota",
        bParty: "Option-1",
        dateTime: "2023-12-03:09:10:00"
      },
      {
        crimeNo : 103,
        aParty: "Hyundai",
        bParty: "Option-2",
        dateTime: "2023-11-03:19:12:00"
      },
      {
        crimeNo : 104,
        aParty: "Toyota",
        bParty: "Option-3",
        dateTime: "2024-02-10:01:01:00"
      }
    ];

    this.navbarService.setShowNavbar(true);

    this.cdrDataForm = this.formBuilder.group({

      uploadFile: new FormControl(),
      selectValue:  new FormControl(),
      searchField: new FormControl(),

      searchValue: new FormControl(),

      crimeNo: new FormControl(),
      partyA: new FormControl(),
      partyB: new FormControl(),
      dateTime: new FormControl(),
      duration: new FormControl(),
      cellType: new FormControl(),
      firstCellId: new FormControl(),
      lastCellId: new FormControl(),
      imeiA: new FormControl(),
      imsiA: new FormControl(),
      cellIdAddress: new FormControl(),
      latitude: new FormControl(),
      longitude: new FormControl(),

      policeStation: new FormControl(),

      }
    );

    this.initialiseCDRtableData();

  }

  initialiseCDRtableData(){

    // $('#cdr-dataTable').DataTable( {
    //   pagingType: 'full_numbers',
    //   pageLength: 5,
    //   processing: true,
    //   lengthMenu : [5, 10, 25]
    // } );

  }


  seachValueToCdrDataForm(): void{
      // console.log("seach value : " + this.searchValue);
      // if(this.searchValue != "" ||
      //   this.searchValue != null){
      //     this.updateDataButton = false;
      // }

      console.log(this.cdrDataForm.value.searchValue);
      if(this.cdrDataForm.value.searchValue != "" ||
          this.cdrDataForm.value.searchValue != null){
            this.updateDataButton = false;
      }
  }

  onChangeFileBulkUpload(event: any) {
    console.log(event.target.files);

    console.log(this.cdrDataForm.value);

    if(this.cdrDataForm.value.uploadFile != "" ||
      this.cdrDataForm.value.uploadFile != null){
        this.bulkDataButton = false;
    }

  }




  addCdrDetails(): void {
    console.log("New CDR Data");
  }

  updateCdrSearchValue(): void {
    console.log("Update CDR Data");
  }

  bulkUploadOfCdrData(): void {
    console.log("Bulk Upload CDR Data");
  }

  submitCdrData(): void {
    console.log("Submit CDR Data");
  }

}
