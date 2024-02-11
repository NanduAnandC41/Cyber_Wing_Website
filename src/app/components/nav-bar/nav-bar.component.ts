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
      linkName: "suspect-data",
    },
    {
      cardName: "Cell ID Data",
      linkName: "cell-data",
    },
    {
      cardName: "SDR",
      linkName: "sdr-data",
    },
    {
      cardName: "CAF Forms",
      linkName: "caf-forms",
    },
    {
      cardName: "Ration Card Details",
      linkName: "ration-card",
    },
    {
      cardName: "Mobile Hunt",
      linkName: "mobile-hunt",
    },
    {
      cardName: "Daily CDR Requests",
      linkName: "cdr-requests",
    },
    {
      cardName: "social Media",
      linkName: "social-media",
    },
    {
      cardName: "Cases Investigation",
      linkName: "cases-check",
    },
    {
      cardName: "Search Multiple Criteria",
      linkName: "search-criteria",
    },
    {
      cardName: "NCRP",
      linkName: "ncrp-data",
    }
  ];
    
  }



}
