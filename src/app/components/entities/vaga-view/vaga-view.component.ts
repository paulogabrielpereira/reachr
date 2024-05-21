import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl,  FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vaga-view',
  templateUrl: './vaga-view.component.html',
  styleUrls: ['./vaga-view.component.css']
})
export class VagaViewComponent implements OnInit {

  formVaga = new FormGroup({
    title: new FormControl(''),
    number: new FormControl(''),
    type: new FormControl(''),
    senior: new FormControl(''),
    firm: new FormControl(''),
    dept: new FormControl(''),
    sect: new FormControl(''),
    cost: new FormControl(''),
    req: new FormControl(''),
    root: new FormControl(''),
    edoc: new FormControl(''),
    description: new FormControl(''),
    requests: new FormControl(''),
    tags: new FormControl(''),
    area: new FormControl(''),
    manager: new FormControl(''),
    office: new FormControl(''),
    email: new FormControl(''),
  });  

  numDoc : Number = 12341;
  author : string = 'Leandro Tabota';
  @ViewChild('value') value! : ElementRef;
  @ViewChild('noTop') noTop! : ElementRef;
  @ViewChild('yesTop') yesTop! : ElementRef;
  @ViewChild('form') form! : ElementRef;
  @ViewChild('buttonsTop') buttonsTop! : ElementRef;



  constructor() { }

  ngOnInit(): void {
  }


  unselectable() {
    return false;
  }

  increaseValue() {
   this.value.nativeElement.value++;
  }

  decreaseValue() {
    if (this.value.nativeElement.value > 0) {
      this.value.nativeElement.value--;
    }
  }

  changeYesNo() {
    this.buttonsTop.nativeElement.addEventListener('click', (e : Event) => {
      if (e.target == this.noTop.nativeElement ) {
        this.noTop.nativeElement.classList.add('active');
        this.yesTop.nativeElement.classList.remove('active');
      } else {
        this.yesTop.nativeElement.classList.add('active');
        this.noTop.nativeElement.classList.remove('active');
      }
    })
  }
}
