import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'app-daily-cdr-requests',
  templateUrl: './daily-cdr-requests.component.html',
  styleUrls: ['./daily-cdr-requests.component.css']
})
export class DailyCdrRequestsComponent implements OnInit{

  constructor(private navbarService: NavBarService) { }

  ngOnInit(): void {
    this.navbarService.setShowNavbar(false); 
  }

}
	