import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css'],
  animations: [
    trigger('openMenu', [
      state('close', style({
        width: '3.6em',
      })),
      state('open', style({
        width: '12.8em',
      })),
      transition('close => open', animate('400ms ease-out')),
      transition('open => close', animate('400ms ease-out'))
    ]),
    trigger('showList', [
      state('invisible', style({
        display: 'none',
      })),
      state('visible', style({
        display: 'block',
      })),
      transition('invisible => visible', animate('400ms')),
      transition('visible => invisible', animate('400ms'))
   ]),
  ]
})

export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('arrMenu') arrMenu! : ElementRef;
  @ViewChild('openMenu') openMenu! : ElementRef;
  @ViewChild('modal') modal! : ElementRef;
  stateMenu = 'close';
  statePages = 'disable';
  stateList = 'invisible';

  changeState() {
    this.stateMenu = this.stateMenu === 'close' ? 'open' : 'close';
    if (this.stateMenu === 'open') {
      this.openMenu.nativeElement.style.boxShadow = '5px 0 5px #00000055';
    } else {
      this.openMenu.nativeElement.style.boxShadow = 'none';
    }
    this.stateList = this.stateList === 'invisible' ? 'visible' : 'invisible';
  }

  changeArrow() {
    if (this.stateMenu === 'close') {
      this.arrMenu.nativeElement.innerHTML = '>';
    } else {
      this.arrMenu.nativeElement.textContent = '<';
    }
  }

  closeMenu() {
    if (this.stateMenu = 'open') {
      this.stateMenu = 'close';
      this.openMenu.nativeElement.style.boxShadow = 'none';
    }
    this.stateList = this.stateList === 'invisible' ? 'visible' : 'invisible';
    this.arrMenu.nativeElement.innerHTML = '>';
  }
}