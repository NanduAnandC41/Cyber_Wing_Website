import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';


@Component({
  selector: 'app-cases-investigation-data',
  templateUrl: './cases-investigation-data.component.html',
  styleUrls: ['./cases-investigation-data.component.css']
})
export class CasesInvestigationDataComponent implements OnInit{

  constructor(private navbarService: NavBarService) { }

  ngOnInit(): void {
    this.navbarService.setShowNavbar(false); 
  }
}