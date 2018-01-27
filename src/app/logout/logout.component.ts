import { Component, OnInit, Renderer, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  @ViewChild('trick') trick:ElementRef;

  constructor(private renderer: Renderer, private router: Router) {}

  ngOnInit() {
  }

  logout() {    
    let event = new MouseEvent('click', {bubbles: true});
    localStorage.clear();
    // this.renderer.invokeElementMethod(
    //   this.trick.nativeElement, 'dispatchEvent', [event]);
    this.router.navigate(['/']);    
  }

}
