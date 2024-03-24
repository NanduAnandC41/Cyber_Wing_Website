import { Component, OnInit } from '@angular/core';
import { CardsData } from '../../models/state.constants';
import { NavBarService } from '../../services/nav-bar.service';
import { BackendConnectionService } from '../../services/backend-connection.service';
import { ScreenPages } from '../../models/state.constants';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  cardsData: Array<ScreenPages> = [];
  obj: any = {};

  constructor(private navbarService: NavBarService,
    private backendConnectionService: BackendConnectionService) { }

  ngOnInit(): void {

    this.navbarService.setShowNavbar(false);


    this.backendConnectionService.getScreenNames().subscribe(res => {
      if(res && res.success){
        this.cardsData = res.data;
      }
    });

    // var divId = document.getElementById("dashboard_id");

    var divID = document.getElementById('dashboard_id') as HTMLElement;
    divID.style.display = 'none';


  }


}
