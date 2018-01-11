import { Component, OnInit, ViewChild, OnChanges, Output, Input, EventEmitter } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Transaction } from "../transaction";
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnChanges {
    @ViewChild(NgForm) form: NgForm;
    
    @Input() transaction: Transaction = null;
  
    @Output() onSubmit = new EventEmitter<Transaction>();
    @Output() onReset = new EventEmitter();
  
    model: Transaction = null;
    //user: User = new User();
    constructor(
      private userService : AuthService
    ) { }


    
  
  
    ngOnInit() {
      this.model = Object.assign({}, this.transaction);
     }
  
    ngOnChanges() {
      this.model = Object.assign({}, this.transaction);
    }
  
    submit(form) {
      if (!form.valid) {
        return;
      }
      

 //  this.model.updater = this.userService.activeUser();   
    
    this.userService.activeUser().subscribe(res=>{this.model.updater=res;})

      this.onSubmit.emit(this.model);
    }
  
    reset() {
      this.onReset.emit();
    }
  
  }
