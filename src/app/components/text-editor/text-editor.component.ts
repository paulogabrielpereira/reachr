import { Component, OnDestroy, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit, OnDestroy {

  editor! : Editor;
  html = '';

  constructor() { }

  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
      this.editor.destroy();
  }

}
