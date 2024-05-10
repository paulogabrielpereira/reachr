import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaga-view',
  templateUrl: './vaga-view.component.html',
  styleUrls: ['./vaga-view.component.css']
})
export class VagaViewComponent implements OnInit {

  numDoc : Number = 12341;
  author : string = 'Leandro Tabota';

  constructor() { }

  ngOnInit(): void {
  }

}
