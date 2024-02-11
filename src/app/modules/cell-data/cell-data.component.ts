import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'app-cell-data',
  templateUrl: './cell-data.component.html',
  styleUrls: ['./cell-data.component.css']
})
export class CellDataComponent implements OnInit{

  constructor(private navbarService: NavBarService) { }

  ngOnInit(): void {
    this.navbarService.setShowNavbar(false); 
  }

}
