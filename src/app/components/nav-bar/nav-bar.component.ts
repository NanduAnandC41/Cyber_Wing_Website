import { Component, OnInit } from '@angular/core';
import { CardsData } from '../../models/state.constants';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {



  cardsData: Array<CardsData> = [];

  ngOnInit(): void {


  this.cardsData = [
    {
      cardName: "CDR's Data",
      linkName: "cdr-data",
    },
    {
      cardName: "Cyber Bully",
      linkName: "cyber-bully",
    },
    {
      cardName: "Suspect Data",
      linkName: "suspect-data",              // Types Of Crime -> need to create, Suspect Account Details
    },
    // {
    //   cardName: "Cell ID Data",
    //   linkName: "cell-data",
    // },
    {
      cardName: "SDR Data",
      linkName: "sdr-data",
    },
    {
      cardName: "CAF Forms",
      linkName: "caf-forms",
    },
    // {
    //   cardName: "Ration Card Details",
    //   linkName: "ration-card",
    // },
    // {
    //   cardName: "Mobile Hunt",             // No Screen
    //   linkName: "mobile-hunt",
    // },
    // {
    //   cardName: "Daily CDR Requests",      // No Screen
    //   linkName: "cdr-requests",
    // },
    // {
    //   cardName: "Social Media",            // No Screen
    //   linkName: "social-media",
    // },
    // {
    //   cardName: "Cases Investigation",     // No Screen
    //   linkName: "cases-check",
    // },
    // {
    //   cardName: "Search Multiple Criteria",  // No Sceen
    //   linkName: "search-criteria",
    // },
    {
      cardName: "NCRP",
      linkName: "ncrp-data",
    },
    {
      cardName: "Types Of Crimes",
      linkName: "crime-types",
    },
    {
      cardName: "Suspect Acccount Details",
      linkName: "suspect-acc-data",
    }
  ];

  }



}
