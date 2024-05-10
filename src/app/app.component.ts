import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'reachr';

  currentPage! : String;
  @ViewChild('footer') footer! : ElementRef

  constructor(private router : Router) {
    this.currentPage = router.url;

    if (this.currentPage === '/') {
      
    }
  }
}
