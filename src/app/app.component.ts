import { Component } from '@angular/core';
import { NavBarService } from './services/nav-bar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website-official-project';
  showNavbar: boolean = false;

  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  constructor(private navbarService: NavBarService) {
    this.navbarService.showNavbar.subscribe(show => this.showNavbar = show);
  }

  ngOnInit(): void {


  }

  logout(): void {

    window.location.reload();
  }
}
