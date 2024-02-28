import { Component, OnInit } from '@angular/core';
import { CardsData } from '../../models/state.constants';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cardsData: Array<CardsData> = [];

  constructor(private navbarService: NavBarService) { }

  ngOnInit(): void {

    this.navbarService.setShowNavbar(false);

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
      // {
      //   cardName: "Cell ID Data",
      //   linkName: "cell-data",
      // },
      {
        cardName: "SDR Data",
        linkName: "sdr-data",
      },
      // {
      //   cardName: "CAF Forms",
      //   linkName: "caf-forms",
      // },
      // {
      //   cardName: "Ration Card Details",
      //   linkName: "ration-card",
      // },
      // {
      //   cardName: "Mobile Hunt",
      //   linkName: "mobile-hunt",
      // },
      // {
      //   cardName: "Daily CDR Requests",
      //   linkName: "cdr-requests",
      // },
      // {
      //   cardName: "Social Media",
      //   linkName: "social-media",
      // },
      // {
      //   cardName: "Cases Investigation",
      //   linkName: "cases-check",
      // },
      // {
      //   cardName: "Search Multiple Criteria",
      //   linkName: "search-criteria",
      // },
      // {
      //   cardName: "NCRP",
      //   linkName: "ncrp-data",
      // }
    ];

  }

}
