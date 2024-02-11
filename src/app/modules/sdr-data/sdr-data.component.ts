import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'app-sdr-data',
  templateUrl: './sdr-data.component.html',
  styleUrls: ['./sdr-data.component.css']
})
export class SdrDataComponent implements OnInit{

  constructor(private navbarService: NavBarService) { }

  ngOnInit(): void {
    this.navbarService.setShowNavbar(false); 
  }

}