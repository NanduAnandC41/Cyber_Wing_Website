import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'app-search-multiple-criteria-data',
  templateUrl: './search-multiple-criteria-data.component.html',
  styleUrls: ['./search-multiple-criteria-data.component.css']
})
export class SearchMultipleCriteriaDataComponent implements OnInit{

  constructor(private navbarService: NavBarService) { }

  ngOnInit(): void {
    this.navbarService.setShowNavbar(false); 
  }

}
	
	