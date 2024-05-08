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
   trigger('showOptions', [
    state('show', style({
      
    })),
    state('hide', style({

    }))
   ])
]})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('listPages') listPages! : ElementRef;
  @ViewChild('menuPages') menuPages! : ElementRef;

  showMenu() {
    this.menuPages.nativeElement.classList.toggle('exp-menu');
    if (this.menuPages.nativeElement.classList.length == 2) {
      this.listPages.nativeElement.style.display = 'block';
    } else {
      this.listPages.nativeElement.style.display = 'none';
    }
  }

  stateMenu = 'close';
  stateList = 'invisible';

  changeState() {
    this.stateMenu = this.stateMenu === 'close' ? 'open' : 'close';
    this.stateList = this.stateList === 'invisible' ? 'visible' : 'invisible';
  }

}