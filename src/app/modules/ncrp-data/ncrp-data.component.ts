
import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'app-ncrp-data',
  templateUrl: './ncrp-data.component.html',
  styleUrls: ['./ncrp-data.component.css']
})
export class NcrpDataComponent implements OnInit{

  constructor(private navbarService: NavBarService) { }

  ngOnInit(): void {
    this.navbarService.setShowNavbar(true);
  }

}
