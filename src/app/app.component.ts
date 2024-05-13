import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'reachr';

  @ViewChild('page') page! : ElementRef;
  @ViewChild('menu') menu! : ElementRef;
  @ViewChild('modal') modal! : ElementRef;

  ngAfterViewInit(): void {
    let pageStyle = window.getComputedStyle(this.page.nativeElement),
    menuStyle = window.getComputedStyle(this.menu.nativeElement),
    modalStyle = window.getComputedStyle(this.modal.nativeElement);
    let defaultHeight = pageStyle.height;
    console.log(pageStyle.height);
    modalStyle.height = defaultHeight;
    menuStyle.height = defaultHeight;
    console.log(modalStyle.height); 
  }
}