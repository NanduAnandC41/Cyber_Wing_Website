import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../services/nav-bar.service';

@Component({
  selector: 'app-social-media-data',
  templateUrl: './social-media-data.component.html',
  styleUrls: ['./social-media-data.component.css']
})
export class SocialMediaDataComponent implements OnInit{

  constructor(private navbarService: NavBarService) { }

  ngOnInit(): void {
    this.navbarService.setShowNavbar(false); 
  }

}
	
	