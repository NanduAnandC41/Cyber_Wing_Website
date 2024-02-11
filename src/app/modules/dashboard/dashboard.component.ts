import { Component, OnInit } from '@angular/core';
import { CardsData } from '../../models/state.constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cardsData: Array<CardsData> = [];

  constructor(){

  }

  ngOnInit(): void {

    this.cardsData = [
      {
        cardName: "CDR's Data",
        linkName: "cdr-data",
      },
      {
        cardName: "Cyber Bully",
        linkName: "",
      },
      {
        cardName: "Suspect Data",
        linkName: "",
      },
      {
        cardName: "Cell ID Data",
        linkName: "",
      },
      {
        cardName: "SDR",
        linkName: "",
      },
      {
        cardName: "CAF Forms",
        linkName: "",
      },
      {
        cardName: "Ration Card Details",
        linkName: "",
      },
      {
        cardName: "Mobile Hunt",
        linkName: "",
      },
      {
        cardName: "Daily CDR Requests",
        linkName: "",
      },
      {
        cardName: "social Media",
        linkName: "",
      },
      {
        cardName: "Cases Investigation",
        linkName: "",
      },
      {
        cardName: "Search Multiple Criteria",
        linkName: "",
      },
      {
        cardName: "NCRP",
        linkName: "",
      }
    ];

  }

}
