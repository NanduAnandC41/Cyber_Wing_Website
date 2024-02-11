import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'app-mobile-hunt-data',
  templateUrl: './mobile-hunt-data.component.html',
  styleUrls: ['./mobile-hunt-data.component.css']
})
export class MobileHuntDataComponent implements OnInit{

  constructor(private navbarService: NavBarService) { }

  ngOnInit(): void {
    this.navbarService.setShowNavbar(false); 
  }

}
	