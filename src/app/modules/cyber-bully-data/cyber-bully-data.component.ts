import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'app-cyber-bully-data',
  templateUrl: './cyber-bully-data.component.html',
  styleUrls: ['./cyber-bully-data.component.css']
})
export class CyberBullyDataComponent implements OnInit{

  constructor(private navbarService: NavBarService) { }

  ngOnInit(): void {
    this.navbarService.setShowNavbar(false); 
  }

}