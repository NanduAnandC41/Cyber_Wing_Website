import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'app-caf-forms-data',
  templateUrl: './caf-forms-data.component.html',
  styleUrls: ['./caf-forms-data.component.css']
})
export class CafFormsDataComponent implements OnInit{

  constructor(private navbarService: NavBarService) { }

  ngOnInit(): void {
    this.navbarService.setShowNavbar(false); 
  }

}