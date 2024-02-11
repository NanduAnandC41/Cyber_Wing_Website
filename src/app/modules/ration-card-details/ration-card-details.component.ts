	
import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'app-ration-card-details',
  templateUrl: './ration-card-details.component.html',
  styleUrls: ['./ration-card-details.component.css']
})
export class RationCardDetailsComponent implements OnInit{

  constructor(private navbarService: NavBarService) { }

  ngOnInit(): void {
    this.navbarService.setShowNavbar(false); 
  }

}