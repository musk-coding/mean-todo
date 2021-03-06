import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication/shared/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLoggedIn:  true;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

}
