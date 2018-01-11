import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  @ViewChild(NgForm) form: NgForm;
  
    @Input() payment: string = null;
  
    @Output() onSubmit = new EventEmitter<string>();
    @Output() onReset = new EventEmitter();
  
    model: string = null;
  
    constructor() { }
  
    ngOnInit() {
      this.model = Object.assign({}, this.payment);
     }
  
    ngOnChanges() {
      this.model = Object.assign({}, this.payment);
    }
  
    submit(form) {
      if (!form.valid) {
        return;
      }
      this.onSubmit.emit(this.model);
    }
  
    reset() {
      this.onReset.emit();
    }
  
  }
