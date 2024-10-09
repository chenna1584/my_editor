import { Component } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent {
  content: string = '';

  
  editorConfig = {
    editable: true,
    spellcheck: true,
    height: '300px',
    minHeight: '300px',
    maxHeight: '300px',
    width: '100%',
    minWidth: '0',
    translate: 'yes',
    toolbarHidden: false,
    toolbar: [
      ['bold', 'italic', 'underline', 'strikeThrough'],
      ['fontSize', 'textColor', 'backgroundColor'],
      ['unorderedList', 'orderedList'],
      ['link', 'image', 'video'],
      ['removeFormat'],
      ['insertTable'],
      ['undo', 'redo'],
      ['clear'],
      ['horizontalLine'],
      ['fontName'],
      ['alignLeft', 'alignCenter', 'alignRight', 'alignJustify'],
      ['indent', 'outdent'],
      ['formatBlock'],
      ['insertOrderedList', 'insertUnorderedList'],
      ['insertHorizontalRule'],
    ],
    
  };

  insertImage(url: string): void {
    const imgTag = `<img src="${url}" style="max-width: 100%; height: auto;">`;
    this.content += imgTag;
  }
}
